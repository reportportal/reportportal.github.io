import { useEffect, useState, useCallback } from 'react';

import {
  RECAPTCHA_SITE_KEY,
  RECAPTCHA_SCRIPT_ID,
  RECAPTCHA_SRC,
  RECAPTCHA_ENABLED,
} from '../utils/constants';

const recaptchaPromiseMap = new Map();

declare global {
  interface Window {
    grecaptcha?: {
      enterprise?: {
        ready(callback: () => void): void;
        execute(siteKey: string, options: { action: string }): Promise<string>;
        render(
          container: string | HTMLElement,
          parameters: {
            sitekey: string;
            callback?: (token: string) => void;
            'error-callback'?: () => void;
            'expired-callback'?: () => void;
          },
        ): number;
        reset(widgetId?: number): void;
      };
    };
    recaptchaChallengeResolve?: (token: string) => void;
    recaptchaChallengeReject?: () => void;
  }
}

const loadRecaptchaScript = () => {
  const existingPromise = recaptchaPromiseMap.get(RECAPTCHA_SITE_KEY);

  if (existingPromise) {
    return existingPromise;
  }

  const loadingPromise = new Promise((resolve, reject) => {
    if (window.grecaptcha?.enterprise) {
      window.grecaptcha.enterprise.ready(() => resolve(''));
      return;
    }

    let script = document.getElementById(RECAPTCHA_SCRIPT_ID) as HTMLScriptElement | null;

    const handleLoad = () => {
      if (window.grecaptcha?.enterprise) {
        window.grecaptcha.enterprise.ready(() => resolve(''));
      } else {
        recaptchaPromiseMap.delete(RECAPTCHA_SITE_KEY);
        reject(new Error('reCAPTCHA failed to initialize.'));
      }
    };

    const handleError = () => {
      recaptchaPromiseMap.delete(RECAPTCHA_SITE_KEY);
      reject(new Error('Failed to load reCAPTCHA script.'));
    };

    if (!script) {
      script = document.createElement('script');
      script.id = RECAPTCHA_SCRIPT_ID;
      script.src = RECAPTCHA_SRC;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        script?.setAttribute('data-loaded', 'true');
        handleLoad();
      };
      script.onerror = handleError;
      document.body.appendChild(script);
    } else if (script.getAttribute('data-loaded') === 'true') {
      handleLoad();
    } else {
      script.addEventListener('load', handleLoad, { once: true });
      script.addEventListener('error', handleError, { once: true });
    }
  });

  recaptchaPromiseMap.set(RECAPTCHA_SITE_KEY, loadingPromise);

  return loadingPromise.catch(error => {
    recaptchaPromiseMap.delete(RECAPTCHA_SITE_KEY);
    throw error;
  });
};

interface UseRecaptchaOptions {
  action: string;
  timeout?: number;
  retryCount?: number;
  retryDelay?: number;
}

interface UseRecaptchaReturn {
  executeRecaptcha: () => Promise<string | null>;
  executeRecaptchaChallenge: () => Promise<string | null>;
  recaptchaError: string | null;
  clearError: () => void;
  isRecaptchaEnabled: boolean;
  showChallenge: boolean;
  setShowChallenge: (show: boolean) => void;
}

export const useRecaptcha = ({
  action,
  timeout = 10000,
  retryCount = 2,
  retryDelay = 1000,
}: UseRecaptchaOptions): UseRecaptchaReturn => {
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const [showChallenge, setShowChallenge] = useState<boolean>(false);

  useEffect(() => {
    if (RECAPTCHA_ENABLED) {
      loadRecaptchaScript().catch(error => {
        console.error('Failed to load reCAPTCHA:', error);
        setRecaptchaError('Security verification failed to load. Please refresh the page.');
      });
    }
  }, []);

  const executeRecaptchaBase = useCallback(async (): Promise<string> => {
    await loadRecaptchaScript();

    if (!window.grecaptcha?.enterprise) {
      throw new Error('reCAPTCHA enterprise is not available.');
    }

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('reCAPTCHA verification timeout')), timeout);
    });

    const executePromise = window.grecaptcha.enterprise.execute(RECAPTCHA_SITE_KEY, { action });

    return Promise.race([executePromise, timeoutPromise]);
  }, [action, timeout]);

  const executeRecaptcha = useCallback(async (): Promise<string | null> => {
    if (!RECAPTCHA_ENABLED) {
      return null;
    }

    setRecaptchaError(null);
    let token: string | null = null;
    let retries = retryCount;

    /* eslint-disable no-await-in-loop */
    while (retries >= 0 && !token) {
      try {
        token = await executeRecaptchaBase();
      } catch (error) {
        if (retries === 0) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          console.error('reCAPTCHA failed after retries:', errorMessage);
          setRecaptchaError('Security verification failed. Please try again.');
          break;
        }
        retries -= 1;
        if (retryDelay > 0) {
          await new Promise(resolve => {
            setTimeout(resolve, retryDelay);
          });
        }
      }
    }
    /* eslint-enable no-await-in-loop */

    return token;
  }, [executeRecaptchaBase, retryCount, retryDelay]);

  const executeRecaptchaChallenge = useCallback(async (): Promise<string | null> => {
    if (!RECAPTCHA_ENABLED) {
      return null;
    }

    return new Promise<string | null>((resolve, reject) => {
      loadRecaptchaScript()
        .then(() => {
          if (!window.grecaptcha?.enterprise) {
            setRecaptchaError('Security verification failed to load. Please refresh the page.');
            reject(new Error('reCAPTCHA enterprise is not available.'));
            return;
          }

          const timeoutId = setTimeout(() => {
            setRecaptchaError('Security verification timeout. Please try again.');
            reject(new Error('reCAPTCHA challenge timeout'));
          }, timeout);

          window.recaptchaChallengeResolve = (token: string) => {
            clearTimeout(timeoutId);
            setRecaptchaError(null);
            setShowChallenge(false);
            resolve(token);
          };

          window.recaptchaChallengeReject = () => {
            clearTimeout(timeoutId);
            setRecaptchaError('Security verification failed. Please try again.');
            reject(new Error('reCAPTCHA challenge failed'));
          };
        })
        .catch(error => {
          console.error('Failed to load reCAPTCHA:', error);
          setRecaptchaError('Security verification failed to load. Please refresh the page.');
          reject(error);
        });
    });
  }, [timeout]);

  const clearError = useCallback(() => {
    setRecaptchaError(null);
  }, []);

  return {
    executeRecaptcha,
    executeRecaptchaChallenge,
    recaptchaError,
    clearError,
    isRecaptchaEnabled: RECAPTCHA_ENABLED,
    showChallenge,
    setShowChallenge,
  };
};

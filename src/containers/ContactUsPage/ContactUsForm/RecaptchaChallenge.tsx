import React, { useEffect, useRef } from 'react';
import { RECAPTCHA_SITE_KEY } from '@app/utils/constants';

export const RecaptchaChallenge = ({ onSuccess, onError, onExpired }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current || !window.grecaptcha?.enterprise) {
      return;
    }

    try {
      widgetIdRef.current = window.grecaptcha.enterprise.render(containerRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        callback: onSuccess,
        'error-callback': onError,
        'expired-callback': onExpired,
      });
    } catch (error) {
      console.error('Failed to render Google reCAPTCHA challenge:', error);
      onError();
    }

    // eslint-disable-next-line consistent-return
    return () => {
      if (widgetIdRef.current !== null && window.grecaptcha?.enterprise) {
        try {
          window.grecaptcha.enterprise.reset(widgetIdRef.current);
        } catch (error) {
          console.error('Failed to reset Google reCAPTCHA:', error);
        }
      }
    };
  }, [onSuccess, onError, onExpired]);

  return (
    <div
      ref={containerRef}
      className="recaptcha-challenge-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0',
      }}
    />
  );
};

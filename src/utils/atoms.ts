import { atom } from 'jotai';
import { ANNOUNCEMENT_CLOSED_KEY } from '@app/utils/constants';

const getInitialAnnouncementOpenState = () => {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    return !JSON.parse(sessionStorage.getItem(ANNOUNCEMENT_CLOSED_KEY) ?? 'false');
  }

  return false;
};

export const subscriptionFormAtom = atom({ isSubmitted: false, isAlreadySubscribed: false });
export const watchProductOverviewAtom = atom({ isOpen: false });
export const announcementOpenAtom = atom(getInitialAnnouncementOpenState());

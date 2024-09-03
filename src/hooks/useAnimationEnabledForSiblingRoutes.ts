import { useLocation } from '@reach/router';
import { isSameParentRoute } from '@app/utils';

export const useAnimationEnabledForSiblingRoutes = () => {
  const { pathname } = useLocation();

  if (typeof window === 'undefined') {
    return false;
  }

  return !isSameParentRoute(pathname, window.prevLocation?.pathname);
};

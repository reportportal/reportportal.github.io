exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (typeof window !== 'undefined') {
    const isDifferentPathname = location.pathname !== prevLocation?.pathname;
    const withHash = Boolean(location?.hash);

    if (isDifferentPathname && !withHash) {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    }
  }
};

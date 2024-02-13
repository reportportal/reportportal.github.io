/* eslint-disable no-restricted-globals */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

exports.onInitialClientRender = () => {
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
};

exports.shouldUpdateScroll = ({
  routerProps: { location },
  prevRouterProps = {},
  getSavedScrollPosition,
}) => {
  const [, currentPositionY] = getSavedScrollPosition(location);
  const [, prevPositionY] = getSavedScrollPosition(prevRouterProps?.location ?? location);
  const withHash = Boolean(location?.hash);

  const isScrollDifferentFromPreviousPage =
    prevRouterProps.location && prevPositionY !== currentPositionY;
  const shouldScrollOnInitialLoad = !prevRouterProps.location && currentPositionY;

  if (isScrollDifferentFromPreviousPage ?? shouldScrollOnInitialLoad) {
    window.scrollTo({
      top: currentPositionY,
      ...(!withHash && { behavior: 'instant' }),
    });
  }

  return true;
};

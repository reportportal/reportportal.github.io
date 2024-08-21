export const isSameParentRoute = (firstPathname: string, secondPathname = '') => {
  const getParentRoute = (route: string) => route.slice(1).split('/')[0] ?? '';

  return getParentRoute(firstPathname) === getParentRoute(secondPathname);
};

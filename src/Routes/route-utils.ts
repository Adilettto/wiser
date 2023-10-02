import { matchPath } from 'react-router-dom'

import { routeArray, RouteData, routeMap } from './route-config'

const checkRoutePermissions = (
  userPermissions: ReadonlySet<any>,
  route: RouteData,
) => {
  return route.permissions.every((item) => userPermissions.has(item))
}

const matches = (url: string, path: string) => {
  const match = matchPath(path, url);
  return match !== null;
};

export const hasMatch = (
  userPermissions: ReadonlySet<any>,
  url: string,
) => {

  return routeMap.has(url)
    ? checkRoutePermissions(userPermissions, routeMap.get(url)!)
    : routeArray.some(
      (r) => {
        return checkRoutePermissions(userPermissions, r) && matches(url, r.path)
      }
      ,
    )
}


export const hasAccess = (
  userPermissions: ReadonlySet<any>,
  url: string,
) => {
  const checkRoute = (route: RouteData) =>
    route.permissions.every((item) => userPermissions.has(item))

  return routeMap.has(url)
    ? checkRoute(routeMap.get(url)!)
    : routeArray.some((r) => checkRoute(r) && matches(url, r.path))
}
import * as pages from "Pages/index";
import { FC } from "react";

export interface RouteData {
  permissions: ReadonlyArray<any>;
  page: FC;
}

export const routeMap = new Map<string, RouteData>()
  .set("/", {
    page: pages.HomePage,
    permissions: [],
  })
  .set("/loadboard", {
    page: pages.Loadboard,
    permissions: [],
  });

export const routeArray = Array.from(routeMap, ([path, r]) => ({ ...r, path }));

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
  .set("/load", {
    page: pages.LoadDetailPage,
    permissions: [],
  })
  .set("/mybids", {
    page: pages.BidDetailPage,
    permissions: [],
  })
  .set("/myloads", {
    page: pages.LoadListPage,
    permissions: [],
  })
  .set("/health", {
    page: pages.HomePage,
    permissions: [],
  });

export const routeArray = Array.from(routeMap, ([path, r]) => ({ ...r, path }));

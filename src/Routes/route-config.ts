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
  .set("/dashboard", {
    page: pages.HomePage,
    permissions: [],
  })
  .set("/capacity", {
    page: pages.HomePage,
    permissions: [],
  })

  .set("/load", {
    page: pages.LoadListPage,
    permissions: [],
  })
  .set("/load/:id", {
    page: pages.LoadDetailPage,
    permissions: [],
  })
  .set("/loads", {
    page: pages.Loads,
    permissions: [],
  })
  .set("/notification", {
    page: pages.HomePage,
    permissions: [],
  })
  .set("/chat", {
    page: pages.HomePage,
    permissions: [],
  })
  .set("/units", {
    page: pages.HomePage,
    permissions: [],
  })
  .set("/accounting", {
    page: pages.HomePage,
    permissions: [],
  })
  .set("/settings", {
    page: pages.Settings,
    permissions: [],
  })
  .set("/home", {
    page: pages.HomePage,
    permissions: [],
  })
  .set("/load/:id", {
    page: pages.LoadDetailPage,
    permissions: [],
  })
  .set("/mybids", {
    page: pages.BidDetailPage,
    permissions: [],
  })
  .set("/myloads", {
    page: pages.HomePage,
    permissions: [],
  })
  .set("/bids", {
    page: pages.Bids,
    permissions: [],
  })
  .set("/health", {
    page: pages.HomePage,
    permissions: [],
  });

export const routeArray = Array.from(routeMap, ([path, r]) => ({ ...r, path }));

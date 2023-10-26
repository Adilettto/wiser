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

  .set("/forgot-password", {
    page: pages.ForgotPassword,
    permissions: [],
  })

  .set("/sign-in", {
    page: pages.Signin,
    permissions: [],
  })

  .set("/sign-up", {
    page: pages.Signup,
    permissions: [],
  })

  .set("/onboard", {
    page: pages.Onboarding,
    permissions: [],
  })

  .set("/new-password", {
    page: pages.NewPassword,
    permissions: [],
  });

export const routeArray = Array.from(routeMap, ([path, r]) => ({ ...r, path }));

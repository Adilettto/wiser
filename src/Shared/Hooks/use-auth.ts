import { useMemo } from "react";
import type { Location } from "history";

import { hasAccess, hasMatch } from "Routes/route-utils";
import { useSelector } from "react-redux";
import { selectAccount } from "Redux/Auth/slice";
import { readObj } from "Service/storage";

export const usePermissions = () => {
  const profile = useSelector(selectAccount);

  return useMemo<Set<string>>(() => new Set<string>([]), [profile]);
};

export const useAuthRedirect = ({ pathname }: Location) => {
  const profile = useSelector(selectAccount) || readObj("account");
  const permissions = usePermissions();

  if (profile == null) {
    if (
      pathname === "/sign-in" ||
      pathname === "/not-found" ||
      pathname === "/forbidden" ||
      pathname === "/sign-up" ||
      pathname === "/forgot-password" ||
      pathname === "/new-password"
    )
      return;

    return "/sign-in";
  }

  const notFound = !hasMatch(permissions, pathname);

  if (notFound) return "/not-found";

  const forbidden = !hasAccess(permissions, pathname);

  if (forbidden) return "/forbidden";

  if (pathname === "/forbidden") return "/";
};

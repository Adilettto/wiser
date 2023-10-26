import { useMemo } from 'react'
import type { Location } from 'history'

import { hasAccess, hasMatch } from 'Routes/route-utils'
import { useSelector } from 'react-redux'
import { selectAccount } from 'Redux/Auth/slice'


export const usePermissions = () => {
  const profile = useSelector(selectAccount)

  return useMemo<Set<string>>(
    () => new Set<string>(profile?.user_permissions || []),
    [profile],
  )
}

export const useAuthRedirect = ({ pathname }: Location) => {
  const profile = useSelector(selectAccount)
  const permissions = usePermissions()

  if (profile == null) {
    if (pathname === '/login' ||
      pathname === '/not-found' ||
      pathname === '/forbidden'
    ) return;

    return;
  }

  const notFound = !hasMatch(permissions, pathname)

  if (notFound) return '/not-found'

  const forbidden = !hasAccess(permissions, pathname)

  if (forbidden) return '/forbidden'

  if (pathname === '/forbidden') return '/'
}

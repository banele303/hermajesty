"use client"

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { trackPageViewOncePerPath } from '@/lib/pixel'

export function PixelRouteListener() {
  const pathname = usePathname()
  useEffect(() => {
    if (pathname) {
      trackPageViewOncePerPath(pathname)
    }
  }, [pathname])
  return null
}

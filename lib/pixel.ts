// Safe Meta Pixel tracking helpers
// Provides validation so we never send an event without a name (avoids "Missing Event Name" diagnostics)

declare global {
  interface Window {
    // Keep type as any to avoid conflicts with existing declarations elsewhere
    fbq: any;
  }
}

export function trackFb(eventName: string, params?: Record<string, any>) {
  if (!eventName || typeof eventName !== 'string') {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[pixel] Skipped fbq call: missing/invalid event name', eventName)
    }
    return
  }
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[pixel] fbq not ready for event', eventName)
    }
    return
  }
  try {
    if (params) {
      window.fbq('track', eventName, params)
    } else {
      window.fbq('track', eventName)
    }
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[pixel] fbq error', e)
    }
  }
}

export function trackPageViewOncePerPath(path: string) {
  // Optionally de-duplicate page view events
  if (typeof window === 'undefined') return
  const key = '__pv_sent__:' + path
  if ((window as any)[key]) return
  ;(window as any)[key] = true
  trackFb('PageView')
}

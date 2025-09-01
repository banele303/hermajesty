"use client"

import { useEffect } from 'react'
import { trackFb } from '@/lib/pixel'

// Delegated click listener to fire standardized Lead events for any element
// carrying the data-lead attribute. Add data-lead-source / data-lead-plan / data-lead-value
// to buttons or links to automatically track without converting parent components to client.
export function LeadTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>('[data-lead]')
      if (!target) return
      const source = target.getAttribute('data-lead-source') || 'unknown'
      const plan = target.getAttribute('data-lead-plan') || undefined
      const valueAttr = target.getAttribute('data-lead-value')
      const value = valueAttr ? parseFloat(valueAttr) || 0 : 0
      const params = {
        content_name: 'CTA Click',
        lead_source: source,
        plan,
        value,
        currency: 'ZAR',
      }
      trackFb('Lead', params)
      trackFb('Contact', params)
    }
    document.addEventListener('click', handler, { capture: true })
    return () => document.removeEventListener('click', handler, { capture: true } as any)
  }, [])
  return null
}

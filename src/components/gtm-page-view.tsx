'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const GTM_ENABLED = Boolean(process.env.NEXT_PUBLIC_GTM_ID?.trim());

/** Pushes virtual page views on client-side navigations for GTM (App Router). */
export function GtmPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GTM_ENABLED || typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}

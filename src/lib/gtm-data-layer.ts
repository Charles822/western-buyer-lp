declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const GTM_CONFIGURED = Boolean(process.env.NEXT_PUBLIC_GTM_ID?.trim());

/**
 * Push to GTM `dataLayer` when `NEXT_PUBLIC_GTM_ID` is set (browser only).
 * Use in GTM as a Custom Event trigger (e.g. event name `concierge_demo_unlock`).
 */
export function pushGtmDataLayer(payload: Record<string, unknown>): void {
  if (typeof window === 'undefined' || !GTM_CONFIGURED) return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}

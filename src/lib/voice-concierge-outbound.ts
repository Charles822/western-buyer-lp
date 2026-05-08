/**
 * Archived Vapi outbound demo-call flow (POST /call + env wiring).
 * Not imported by `voice-concierge-lead` while the product is inbound-only.
 * Re-use when re-enabling outbound (e.g. optional phone on the form) or from internal scripts.
 */

import { vapiCreateOutboundCall } from '@/lib/vapi-outbound';

export function assistantIdForVoiceLeadSource(source: string | undefined): string | undefined {
  if (source === 'voice-concierge') {
    return process.env.NEXT_PUBLIC_VAPI_GENERAL_ASSISTANT_ID?.trim();
  }
  if (source === 'voice-agent') {
    return process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID?.trim();
  }
  return undefined;
}

export type ConciergeOutboundSkippedReason = 'not_configured' | 'no_phone' | 'api_error';

export type ConciergeOutboundDemoResult = {
  outboundInitiated: boolean;
  outboundSkippedReason: ConciergeOutboundSkippedReason | undefined;
  /** Present when VAPI_DEBUG_CLIENT=1 or NODE_ENV=development and call succeeds */
  outboundVapi?: {
    callId?: string;
    status?: string;
    type?: string;
    endedReason?: string;
  };
};

export async function runConciergeOutboundDemoCall(opts: {
  source: string | undefined;
  customerNumberE164: string;
  customerName: string;
}): Promise<ConciergeOutboundDemoResult> {
  const { source, customerNumberE164, customerName } = opts;

  let outboundInitiated = false;
  let outboundSkippedReason: ConciergeOutboundSkippedReason | undefined;
  let outboundVapi: ConciergeOutboundDemoResult['outboundVapi'];

  const vapiKey = process.env.VAPI_API_KEY?.trim();
  const phoneNumberId = process.env.VAPI_PHONE_NUMBER_ID?.trim();
  const assistantId = assistantIdForVoiceLeadSource(source);

  const e164 = customerNumberE164.trim();

  if (!e164) {
    outboundSkippedReason = 'no_phone';
  } else if (!vapiKey || !phoneNumberId || !assistantId) {
    outboundSkippedReason = 'not_configured';
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[voice-concierge-outbound] Skipped: set VAPI_API_KEY, VAPI_PHONE_NUMBER_ID, and assistant env for this source.'
      );
    }
  } else {
    const result = await vapiCreateOutboundCall(vapiKey, {
      assistantId,
      phoneNumberId,
      customerNumber: e164,
      customerName,
    });
    if (result.ok) {
      outboundInitiated = true;
      console.info('[voice-concierge-outbound] Vapi create call OK:', {
        callId: result.debug.callId,
        status: result.debug.status,
        type: result.debug.type,
        endedReason: result.debug.endedReason,
        rawPreview: result.debug.rawPreview?.slice(0, 1200),
      });
      const exposeClientDebug =
        process.env.NODE_ENV === 'development' || process.env.VAPI_DEBUG_CLIENT === '1';
      if (exposeClientDebug) {
        outboundVapi = {
          callId: result.debug.callId,
          status: result.debug.status,
          type: result.debug.type,
          endedReason: result.debug.endedReason,
        };
      }
    } else {
      outboundSkippedReason = 'api_error';
      console.error('[voice-concierge-outbound] Vapi outbound failed:', {
        message: result.message,
        httpStatus: result.httpStatus,
        details: result.details,
      });
    }
  }

  return {
    outboundInitiated,
    outboundSkippedReason,
    ...(outboundVapi ? { outboundVapi } : {}),
  };
}

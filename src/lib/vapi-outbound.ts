export type VapiCreateCallPayload = {
  assistantId: string;
  phoneNumberId: string;
  customerNumber: string;
  /** Passed as customer.name for templates like {{customer.name}} */
  customerName?: string;
};

/** Subset of POST /call response fields useful for debugging (see Vapi API docs). */
export type VapiCreateCallDebugInfo = {
  callId?: string;
  status?: string;
  type?: string;
  endedReason?: string;
  /** Short snippet of raw JSON for logs when shape differs */
  rawPreview?: string;
};

function extractDebugInfo(body: Record<string, unknown>): VapiCreateCallDebugInfo {
  return {
    callId: typeof body.id === 'string' ? body.id : undefined,
    status: typeof body.status === 'string' ? body.status : undefined,
    type: typeof body.type === 'string' ? body.type : undefined,
    endedReason: typeof body.endedReason === 'string' ? body.endedReason : undefined,
  };
}

export type VapiCreateCallResult =
  | {
      ok: true;
      /** Parsed JSON body from Vapi */
      body: Record<string, unknown>;
      debug: VapiCreateCallDebugInfo;
    }
  | {
      ok: false;
      message: string;
      httpStatus?: number;
      /** Parsed error body when JSON */
      details?: unknown;
    };

const MAX_LOG_BODY = 4000;

/** POST https://api.vapi.ai/call — server-side only (private API key). */
export async function vapiCreateOutboundCall(
  apiKey: string,
  payload: VapiCreateCallPayload
): Promise<VapiCreateCallResult> {
  try {
    const res = await fetch('https://api.vapi.ai/call', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assistantId: payload.assistantId,
        phoneNumberId: payload.phoneNumberId,
        customer: {
          number: payload.customerNumber,
          ...(payload.customerName?.trim()
            ? { name: payload.customerName.trim() }
            : {}),
        },
      }),
    });

    const text = await res.text();
    let parsed: Record<string, unknown> | null = null;
    if (text.trim()) {
      try {
        parsed = JSON.parse(text) as Record<string, unknown>;
      } catch {
        parsed = null;
      }
    }

    if (!res.ok) {
      const message =
        (parsed && typeof parsed.message === 'string' && parsed.message) ||
        text.slice(0, 500) ||
        `Vapi HTTP ${res.status}`;
      return {
        ok: false,
        message,
        httpStatus: res.status,
        details: parsed ?? text,
      };
    }

    const body = parsed ?? {};
    const debug = extractDebugInfo(body);
    if (Object.keys(body).length > 0) {
      const preview = JSON.stringify(body).slice(0, MAX_LOG_BODY);
      debug.rawPreview =
        preview.length >= MAX_LOG_BODY ? `${preview.slice(0, MAX_LOG_BODY)}…` : preview;
    }

    return { ok: true, body, debug };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Network error';
    return { ok: false, message };
  }
}

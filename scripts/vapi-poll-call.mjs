/**
 * Poll GET https://api.vapi.ai/call/:id until the call leaves an in-flight state.
 *
 * Usage:
 *   npm run vapi:poll-call -- 019e05d9-1825-700a-b4f8-fb30cc27c23d
 *
 * Requires .env with VAPI_API_KEY (same as other scripts).
 */

const callId = process.argv[2]?.trim();
const apiKey = process.env.VAPI_API_KEY?.trim();

if (!callId) {
  console.error('Usage: npm run vapi:poll-call -- <call-id>');
  process.exit(1);
}
if (!apiKey) {
  console.error('Set VAPI_API_KEY (e.g. npm run vapi:poll-call loads .env via package.json)');
  process.exit(1);
}

const ACTIVE = new Set(['queued', 'ringing', 'in-progress', 'forwarding']);

async function fetchCall() {
  const res = await fetch(`https://api.vapi.ai/call/${encodeURIComponent(callId)}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    /* ignore */
  }
  return { ok: res.ok, status: res.status, json, text };
}

const intervalMs = 2000;
const maxMs = 120_000;
const start = Date.now();

console.info('[vapi-poll-call] Polling', callId, `every ${intervalMs}ms (max ${maxMs / 1000}s)\n`);

while (Date.now() - start < maxMs) {
  const { ok, status, json } = await fetchCall();
  if (!ok || !json) {
    console.error('[vapi-poll-call] GET failed:', status, json ?? '(no json)');
    process.exit(1);
  }

  const s = json.status;
  const endedReason = json.endedReason;
  const msg = json.message ?? json.error;

  console.info(new Date().toISOString(), {
    status: s,
    endedReason,
    ...(msg ? { message: msg } : {}),
  });

  if (!ACTIVE.has(String(s))) {
    console.info('\n[vapi-poll-call] Terminal-ish state reached. Full body:');
    console.info(JSON.stringify(json, null, 2));
    process.exit(0);
  }

  await new Promise((r) => setTimeout(r, intervalMs));
}

console.warn('[vapi-poll-call] Timed out still in active state; check Vapi dashboard / support.');
process.exit(2);

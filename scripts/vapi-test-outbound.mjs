/**
 * One-off outbound test: POST https://api.vapi.ai/call
 *
 * Usage (from repo root, loads .env — requires Node 20.6+):
 *   npm run vapi:test-outbound
 *
 * Or without --env-file:
 *   VAPI_API_KEY=... VAPI_PHONE_NUMBER_ID=... NEXT_PUBLIC_VAPI_GENERAL_ASSISTANT_ID=... node scripts/vapi-test-outbound.mjs
 */

const TEST_NUMBER = '+85269784602';
const TEST_NAME = 'Charles Fauchet';

const apiKey = process.env.VAPI_API_KEY?.trim();
const phoneNumberId = process.env.VAPI_PHONE_NUMBER_ID?.trim();
const assistantId =
  process.env.VAPI_TEST_ASSISTANT_ID?.trim() ||
  process.env.NEXT_PUBLIC_VAPI_GENERAL_ASSISTANT_ID?.trim() ||
  process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID?.trim();

if (!apiKey || !phoneNumberId || !assistantId) {
  console.error(
    'Missing env. Set VAPI_API_KEY, VAPI_PHONE_NUMBER_ID, and one of:\n' +
      '  VAPI_TEST_ASSISTANT_ID (optional override) or\n' +
      '  NEXT_PUBLIC_VAPI_GENERAL_ASSISTANT_ID / NEXT_PUBLIC_VAPI_ASSISTANT_ID'
  );
  process.exit(1);
}

const payload = {
  assistantId,
  phoneNumberId,
  customer: {
    number: TEST_NUMBER,
    name: TEST_NAME,
  },
};

console.info('[vapi-test-outbound] Placing test call:', {
  to: TEST_NUMBER,
  name: TEST_NAME,
  assistantId,
  phoneNumberId,
});

const res = await fetch('https://api.vapi.ai/call', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
});

const text = await res.text();
let json;
try {
  json = text ? JSON.parse(text) : null;
} catch {
  json = null;
}

if (!res.ok) {
  console.error('[vapi-test-outbound] HTTP', res.status, json ?? text);
  process.exit(1);
}

console.info('[vapi-test-outbound] OK:', {
  status: res.status,
  callId: json?.id,
  callStatus: json?.status,
  type: json?.type,
});
console.info('[vapi-test-outbound] Full body:', JSON.stringify(json, null, 2));

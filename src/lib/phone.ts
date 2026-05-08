/**
 * Normalize optional phone input to E.164 for Vapi outbound.
 * Requires leading + and country code (no national-only formats).
 */
export function normalizePhoneToE164(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  const compact = trimmed.replace(/[\s\-().]/g, '');
  const withPlus = compact.startsWith('+') ? compact : `+${compact}`;

  // E.164: + then country code and subscriber number (max 15 digits total after +)
  if (!/^\+[1-9]\d{6,14}$/.test(withPlus)) {
    return null;
  }

  return withPlus;
}

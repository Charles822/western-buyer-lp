'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ConciergeVapiWidget } from '@/components/voice-agent/concierge-vapi-widget';

const CONSENT_STORAGE_KEY = 'convertree-voice-demo-consent';
const CONSENT_TITLE = 'Before the demo';
const CONSENT_TEXT =
  'This voice demo may be recorded to improve the experience. By continuing, you agree to a short test call. Use a microphone and a quiet place.';

type ConciergeInlineVoiceProps = {
  publicKey: string;
  assistantId: string;
};

export function ConciergeInlineVoice({ publicKey, assistantId }: ConciergeInlineVoiceProps) {
  const [consentOk, setConsentOk] = useState(false);
  const [callActive, setCallActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (localStorage.getItem(CONSENT_STORAGE_KEY) === '1') {
      setConsentOk(true);
    }
  }, []);

  const handleAcceptConsent = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, '1');
    setConsentOk(true);
  };

  const onVoiceStart = useCallback(() => {
    setError(null);
    setCallActive(true);
  }, []);

  const onVapiError = useCallback((e: Error) => {
    setError(e?.message || 'Voice demo error. Please try again.');
  }, []);

  const onVoiceEnd = useCallback(() => {
    setCallActive(false);
  }, []);

  if (!consentOk) {
    return (
      <div className="rounded-xl border border-zinc-600/60 bg-zinc-950/40 p-6">
        <h4 className="text-sm font-semibold text-white">{CONSENT_TITLE}</h4>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{CONSENT_TEXT}</p>
        <button
          type="button"
          onClick={handleAcceptConsent}
          className="mt-5 w-full rounded-full bg-zinc-100 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-white"
        >
          Continue to demo
        </button>
      </div>
    );
  }

  const vapiWidget = (
    <ConciergeVapiWidget
      publicKey={publicKey}
      assistantId={assistantId}
      onVoiceStart={onVoiceStart}
      onVoiceEnd={onVoiceEnd}
      onVapiError={onVapiError}
    />
  );

  return (
    <div className="space-y-4">
      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      {callActive && (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 px-4 py-3 text-center text-sm font-medium text-emerald-200/90">
          Demo ongoing
        </div>
      )}

      {/* Render VapiWidget via portal to body so it anchors correctly to the viewport */}
      {portalReady && typeof document !== 'undefined' && createPortal(vapiWidget, document.body)}
    </div>
  );
}

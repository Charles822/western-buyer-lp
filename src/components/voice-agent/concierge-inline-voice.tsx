'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ConciergeVapiWidget } from '@/components/voice-agent/concierge-vapi-widget';

type ConciergeInlineVoiceProps = {
  publicKey: string;
  assistantId: string;
};

export function ConciergeInlineVoice({ publicKey, assistantId }: ConciergeInlineVoiceProps) {
  const [callActive, setCallActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [portalReady, setPortalReady] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    setPortalReady(true);
  }, []);

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

  const overlay = overlayVisible ? (
    <div
      className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity duration-500"
      aria-hidden="true"
    />
  ) : null;

  const vapiWidget = (
    <div className="relative z-[9999]" onClickCapture={() => setOverlayVisible(false)}>
      <ConciergeVapiWidget
        publicKey={publicKey}
        assistantId={assistantId}
        onVoiceStart={onVoiceStart}
        onVoiceEnd={onVoiceEnd}
        onVapiError={onVapiError}
      />
    </div>
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

      {portalReady && typeof document !== 'undefined' && createPortal(
        <>
          {overlay}
          {vapiWidget}
        </>,
        document.body
      )}
    </div>
  );
}

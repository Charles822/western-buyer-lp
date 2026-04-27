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

      {portalReady && typeof document !== 'undefined' && createPortal(vapiWidget, document.body)}
    </div>
  );
}

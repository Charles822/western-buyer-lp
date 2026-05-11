'use client';

import dynamic from 'next/dynamic';

const VapiWidget = dynamic(
  () => import('@vapi-ai/client-sdk-react').then((m) => m.VapiWidget),
  { ssr: false }
);

/** Must stay in sync with copy that references the floating widget button label. */
export const CONCIERGE_WEB_VOICE_WIDGET_TITLE = 'Unlock web demo';

type ConciergeVapiWidgetProps = {
  publicKey: string;
  assistantId: string;
  onVoiceStart?: () => void;
  onVoiceEnd?: () => void;
  onVapiError?: (error: Error) => void;
  title?: string;
  voiceEmptyMessage?: string;
};

export function ConciergeVapiWidget({
  publicKey,
  assistantId,
  onVoiceStart,
  onVoiceEnd,
  onVapiError,
  title = CONCIERGE_WEB_VOICE_WIDGET_TITLE,
  voiceEmptyMessage = 'Tap to start. Speak in English like a Western buyer would.',
}: ConciergeVapiWidgetProps) {
  if (!publicKey || !assistantId) {
    return null;
  }

  return (
    <VapiWidget
      publicKey={publicKey}
      assistantId={assistantId}
      mode="voice"
      theme="dark"
      size="full"
      position="bottom-right"
      borderRadius="large"
      baseBgColor="#18181b"
      accentColor="#10b981"
      ctaButtonColor="#ffffff"
      ctaButtonTextColor="#18181b"
      title={title}
      startButtonText="Start voice demo"
      endButtonText="End call"
      voiceEmptyMessage={voiceEmptyMessage}
      voiceShowTranscript
      consentRequired={false}
      onVoiceStart={onVoiceStart}
      onVoiceEnd={onVoiceEnd}
      onError={(err) => {
        if (process.env.NODE_ENV === 'development') {
          console.error('VapiWidget:', err);
        }
        onVapiError?.(err);
      }}
    />
  );
}

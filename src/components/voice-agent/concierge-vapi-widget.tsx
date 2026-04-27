'use client';

import dynamic from 'next/dynamic';
import type { VapiWidgetProps } from '@vapi-ai/client-sdk-react';

const VapiWidget = dynamic(
  () => import('@vapi-ai/client-sdk-react').then((m) => m.VapiWidget),
  { ssr: false }
);

type ConciergeVapiWidgetProps = Pick<
  VapiWidgetProps,
  'publicKey' | 'assistantId' | 'title' | 'voiceEmptyMessage'
>;

export function ConciergeVapiWidget({
  publicKey,
  assistantId,
  title = 'Convertree concierge',
  voiceEmptyMessage = 'Tap to start. Speak in English like a Western buyer would.',
}: ConciergeVapiWidgetProps) {
  if (!publicKey || !assistantId) {
    return null;
  }

  return (
    <div className="relative min-h-[min(32rem,70vh)] w-full overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900/50">
      <VapiWidget
        publicKey={publicKey}
        assistantId={assistantId}
        mode="voice"
        theme="dark"
        size="full"
        position="bottom-center"
        borderRadius="large"
        baseBgColor="#18181b"
        accentColor="#10b981"
        ctaButtonColor="#059669"
        ctaButtonTextColor="#ffffff"
        title={title}
        startButtonText="Start voice demo"
        endButtonText="End call"
        voiceEmptyMessage={voiceEmptyMessage}
        voiceShowTranscript
        consentRequired
        consentTitle="Before the demo"
        consentContent="This voice demo may be recorded to improve the experience. By continuing, you agree to a short test call. Use a microphone and a quiet place."
        onError={(err) => {
          if (process.env.NODE_ENV === 'development') {
            console.error('VapiWidget:', err);
          }
        }}
      />
    </div>
  );
}

import type { Metadata } from 'next';
import { VoiceAgentLanding } from '@/components/voice-agent/voice-agent-landing';
import { voiceAgentLandingGeneral } from '@/lib/voice-agent-landing-content';

export const metadata: Metadata = {
  title: 'Convertree | AI voice concierge for B2B teams',
  description:
    'Enterprise-grade voice AI for pipeline and partner calls—trained on your business, guardrailed, CRM-ready. Try the live concierge demo.',
};

export default function VoiceConciergePage() {
  return <VoiceAgentLanding content={voiceAgentLandingGeneral} />;
}

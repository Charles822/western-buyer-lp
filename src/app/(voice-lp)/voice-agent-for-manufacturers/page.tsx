import type { Metadata } from 'next';
import { VoiceAgentLanding } from '@/components/voice-agent/voice-agent-landing';
import { voiceAgentLandingExporter } from '@/lib/voice-agent-landing-content';

export const metadata: Metadata = {
  title: 'Convertree | Premier AI voice concierge for Asian exporters',
  description:
    'A premium English-speaking AI concierge for Western importer calls—trained on your products, guardrailed, and connected to your CRM. Try the live demo.',
};

export default function VoiceAgentForManufacturersPage() {
  return <VoiceAgentLanding content={voiceAgentLandingExporter} />;
}

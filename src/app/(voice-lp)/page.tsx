import type { Metadata } from 'next';
import { VoiceAgentLanding } from '@/components/voice-agent/voice-agent-landing';
import { voiceAgentLandingGeneral } from '@/lib/voice-agent-landing-content';

export const metadata: Metadata = {
  title: 'Convertree | Never miss a paying customer call',
  description:
    'AI receptionist for your phone line—answers every call in clear English, handles FAQs, and books appointments. Try a 5-minute demo.',
};

export default function HomePage() {
  return <VoiceAgentLanding content={voiceAgentLandingGeneral} />;
}

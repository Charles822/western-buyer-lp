import type { Metadata } from 'next';
import { VoiceAgentLanding } from '@/components/voice-agent/voice-agent-landing';

export const metadata: Metadata = {
  title: 'Elevate Business | AI Automation & Voice Agent Developers',
  description:
    'We design AI systems that replace manual sales, support, and follow-ups. Specialized in n8n, Retell AI, and LLM workflows.',
};

export default function VoiceAgentPage() {
  return <VoiceAgentLanding />;
}

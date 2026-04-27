import { Inter } from 'next/font/google';
import { VoiceAgentRouteShell } from '@/components/voice-agent/voice-agent-route-shell';
import '@/components/voice-agent/voice-agent.css';
import '@vapi-ai/client-sdk-react/styles';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export default function VoiceAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VoiceAgentRouteShell
      className={`${inter.className} relative min-h-screen text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-white`}
    >
      {children}
    </VoiceAgentRouteShell>
  );
}

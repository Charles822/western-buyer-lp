import type { Metadata } from 'next';
import { LegalPageShell } from '@/components/legal/legal-page-shell';
import { PrivacyPolicyBody } from '@/components/legal/privacy-policy-body';

export const metadata: Metadata = {
  title: 'Privacy Policy | Convertree',
  description:
    'How Convertree (Metaverse Lab Limited) collects, uses, and safeguards information when you use our website and AI Voice Concierge services.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Convertree Privacy Policy" lastUpdated="May 4, 2026">
      <PrivacyPolicyBody />
    </LegalPageShell>
  );
}

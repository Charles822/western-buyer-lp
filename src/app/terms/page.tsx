import type { Metadata } from 'next';
import { LegalPageShell } from '@/components/legal/legal-page-shell';
import { TermsBody } from '@/components/legal/terms-body';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Convertree',
  description:
    'Terms and Conditions for Convertree AI Voice Concierge and related services provided by Metaverse Lab Limited.',
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Convertree Terms and Conditions" lastUpdated="May 4, 2026">
      <TermsBody />
    </LegalPageShell>
  );
}

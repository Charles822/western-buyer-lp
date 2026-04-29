'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';
import { ConciergeInlineVoice } from '@/components/voice-agent/concierge-inline-voice';
import { VoiceAgentPhoneMockup } from '@/components/voice-agent/voice-agent-phone-mockup';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { ConciergeDemoCopy, VoiceLeadSource } from '@/lib/voice-agent-landing-content';

const PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY ?? '';
const ASSISTANT_ID = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID ?? '';
const VOICE_DEMO_PHONE =
  process.env.NEXT_PUBLIC_VOICE_DEMO_PHONE?.trim() || '+85200000000';

function voiceDemoTelHref(phone: string) {
  return `tel:${phone.replace(/\s/g, '')}`;
}

function UnlockedBody({
  template,
  phone,
}: {
  template: string;
  phone: string;
}) {
  const marker = 'Unlock web demo';
  const [before, afterPhone = ''] = template.split('{{PHONE}}');
  const idx = afterPhone.indexOf(marker);
  if (idx === -1) {
    return (
      <>
        {before}
        <span className="font-medium text-emerald-300">{phone}</span>
        {afterPhone}
      </>
    );
  }
  return (
    <>
      {before}
      <span className="font-medium text-emerald-300">{phone}</span>
      {afterPhone.slice(0, idx)}
      <span className="font-medium text-white">{marker}</span>
      {afterPhone.slice(idx + marker.length)}
    </>
  );
}

type ConciergeDemoSectionProps = {
  demo: ConciergeDemoCopy;
  leadSource: VoiceLeadSource;
};

export function ConciergeDemoSection({ demo, leadSource }: ConciergeDemoSectionProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/voice-concierge-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          phone: phone.trim() || undefined,
          source: leadSource,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong.');
        setStatus('error');
        return;
      }
      setUnlocked(true);
      setStatus('idle');
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  const hasVapi = Boolean(PUBLIC_KEY && ASSISTANT_ID);

  return (
    <section
      id="demo"
      className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {demo.sectionTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">{demo.sectionSubtitle}</p>
        </div>

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
          <div className="w-full lg:w-5/12">
            <VoiceAgentPhoneMockup />
          </div>

          <div className="w-full space-y-8 lg:w-7/12">
            <div>
              <h3 className="text-2xl font-semibold text-white">{demo.whyHeading}</h3>
              <p className="mt-3 text-lg leading-relaxed text-zinc-300">
                {demo.whySegments.map((seg, i) =>
                  seg.accent ? (
                    <span key={i} className="text-emerald-400">
                      {seg.text}
                    </span>
                  ) : (
                    <span key={i}>{seg.text}</span>
                  )
                )}
              </p>
            </div>

            {!unlocked ? (
              <form
                onSubmit={handleSubmit}
                className="glass-card space-y-5 rounded-2xl p-8"
              >
                <p className="text-sm text-zinc-400">{demo.optInNotice}</p>
                <div className="space-y-2">
                  <Label htmlFor="demo-name" className="text-zinc-200">
                    Full name
                  </Label>
                  <Input
                    id="demo-name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-zinc-600 bg-zinc-900/80 text-white"
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-email" className="text-zinc-200">
                    Work email
                  </Label>
                  <Input
                    id="demo-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-zinc-600 bg-zinc-900/80 text-white"
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-company" className="text-zinc-200">
                    Company
                  </Label>
                  <Input
                    id="demo-company"
                    name="company"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="border-zinc-600 bg-zinc-900/80 text-white"
                    autoComplete="organization"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-phone" className="text-zinc-200">
                    Phone <span className="text-zinc-500">(optional)</span>
                  </Label>
                  <Input
                    id="demo-phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-zinc-600 bg-zinc-900/80 text-white"
                    autoComplete="tel"
                  />
                </div>
                {errorMsg ? (
                  <p className="text-sm text-red-400" role="alert">
                    {errorMsg}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3.5 text-base font-semibold text-white transition-colors hover:bg-emerald-500 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    demo.unlockSubmitLoading
                  ) : (
                    <>
                      {demo.unlockSubmitIdle}
                      <Icon
                        icon="solar:arrow-right-linear"
                        width="1.2em"
                        height="1.2em"
                      />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="demo-unlocked-card glass-card space-y-6 rounded-2xl p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-white">{demo.unlockedTitle}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-emerald-400/90">
                      <UnlockedBody template={demo.unlockedBodyTemplate} phone={VOICE_DEMO_PHONE} />
                    </p>
                    <a
                      href={voiceDemoTelHref(VOICE_DEMO_PHONE)}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 md:hidden"
                    >
                      <Icon icon="solar:phone-calling-bold" className="size-5" aria-hidden />
                      Call the demo line
                    </a>
                  </div>
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 sm:flex">
                    <Icon
                      icon="solar:arrow-right-down-bold-duotone"
                      className="animate-pulse text-2xl text-emerald-400"
                      aria-hidden
                    />
                  </div>
                </div>
                {hasVapi ? (
                  <ConciergeInlineVoice
                    publicKey={PUBLIC_KEY}
                    assistantId={ASSISTANT_ID}
                  />
                ) : (
                  <div className="rounded-xl border border-zinc-600/50 bg-zinc-950/30 p-8 text-center text-zinc-400">
                    <p className="text-base text-zinc-300">
                      Voice demo is being configured. Add{' '}
                      <code className="text-emerald-400">NEXT_PUBLIC_VAPI_PUBLIC_KEY</code>{' '}
                      and{' '}
                      <code className="text-emerald-400">
                        NEXT_PUBLIC_VAPI_ASSISTANT_ID
                      </code>{' '}
                      to your environment to enable the live call.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

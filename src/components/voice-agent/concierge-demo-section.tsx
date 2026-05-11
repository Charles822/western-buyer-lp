'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';
import { CONCIERGE_WEB_VOICE_WIDGET_TITLE } from '@/components/voice-agent/concierge-vapi-widget';
import { ConciergeInlineVoice } from '@/components/voice-agent/concierge-inline-voice';
import { VoiceAgentPhoneMockup } from '@/components/voice-agent/voice-agent-phone-mockup';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { pushGtmDataLayer } from '@/lib/gtm-data-layer';
import type { ConciergeDemoCopy, VoiceLeadSource } from '@/lib/voice-agent-landing-content';

const PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY ?? '';
/** Voice-agent (exporter) landing — `/voice-agent-for-manufacturers` */
const ASSISTANT_ID_EXPORTER = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID ?? '';
/** General SMB landing — site root `/` */
const ASSISTANT_ID_GENERAL = process.env.NEXT_PUBLIC_VAPI_GENERAL_ASSISTANT_ID ?? '';
const VOICE_DEMO_PHONE =
  process.env.NEXT_PUBLIC_VOICE_DEMO_PHONE?.trim() || '+852 9290 3426';

function voiceDemoTelHref(phone: string) {
  return `tel:${phone.replace(/\s/g, '')}`;
}

function UnlockedBody({
  demo,
  phone,
}: {
  demo: ConciergeDemoCopy;
  phone: string;
}) {
  const telHref = voiceDemoTelHref(phone);

  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-emerald-400/90">
        {demo.unlockedSubtitle}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col rounded-xl border border-emerald-500/25 bg-zinc-950/40 p-5 ring-1 ring-emerald-500/10">
          <h4 className="text-base font-semibold text-white">
            {demo.unlockedPhoneTitle}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-emerald-400/90">
            {demo.unlockedPhoneText}
          </p>
          <a
            href={telHref}
            className="mt-4 flex w-full min-w-0 flex-col items-center justify-center gap-2.5 rounded-xl border border-emerald-400/45 bg-emerald-600 px-3 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-emerald-950/50 ring-1 ring-emerald-300/20 transition hover:bg-emerald-500 hover:shadow-emerald-900/60 active:scale-[0.99] sm:flex-row sm:gap-3 sm:px-4"
          >
            <Icon icon="solar:phone-calling-bold" className="size-6 shrink-0" aria-hidden />
            <span className="min-w-0 w-full max-w-full text-balance break-words text-center leading-snug sm:w-auto sm:text-left">
              {phone}
            </span>
          </a>
        </div>
        <div className="flex flex-col rounded-xl border border-emerald-500/25 bg-zinc-950/40 p-5 ring-1 ring-emerald-500/10">
          <h4 className="text-base font-semibold text-white">
            {demo.unlockedWebTitle}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-emerald-400/90">
            {demo.unlockedWebText}
          </p>
          <div className="mt-4 flex items-start gap-3 rounded-lg border border-emerald-500/20 bg-emerald-950/20 px-3 py-2.5">
            <Icon
              icon="solar:arrow-right-down-bold-duotone"
              className="mt-0.5 size-6 shrink-0 text-emerald-400"
              aria-hidden
            />
            <p className="text-sm leading-relaxed text-emerald-300/95">
              Tap{' '}
              <span className="font-medium text-white">
                {CONCIERGE_WEB_VOICE_WIDGET_TITLE}
              </span>{' '}
              in the bottom-right corner of your screen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type ConciergeDemoSectionProps = {
  demo: ConciergeDemoCopy;
  leadSource: VoiceLeadSource;
};

export function ConciergeDemoSection({ demo, leadSource }: ConciergeDemoSectionProps) {
  const assistantId =
    leadSource === 'voice-concierge' ? ASSISTANT_ID_GENERAL : ASSISTANT_ID_EXPORTER;
  const assistantIdEnvName =
    leadSource === 'voice-concierge'
      ? 'NEXT_PUBLIC_VAPI_GENERAL_ASSISTANT_ID'
      : 'NEXT_PUBLIC_VAPI_ASSISTANT_ID';

  const [unlocked, setUnlocked] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

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
          company: company.trim() || undefined,
          source: leadSource,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong.');
        setStatus('error');
        return;
      }
      pushGtmDataLayer({
        event: 'concierge_demo_unlock',
        lead_source: leadSource,
      });
      setUnlocked(true);
      setStatus('idle');
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  const hasVapi = Boolean(PUBLIC_KEY && assistantId);

  return (
    <section
      id="demo"
      className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900 pt-16 pb-24 md:pt-20 md:pb-32"
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
            <VoiceAgentPhoneMockup variant={leadSource === 'voice-concierge' ? 'evelyn' : 'default'} />
          </div>

          <div className="w-full space-y-8 lg:w-7/12">
            <div>
              <h3 className="text-2xl font-semibold text-white">{demo.whyHeading}</h3>
              {demo.whyBullets?.length ? (
                <div className="mt-3 space-y-3 text-lg text-zinc-300">
                  {demo.whyIntro ? (
                    <p className="leading-relaxed text-zinc-300">{demo.whyIntro}</p>
                  ) : null}
                  <ul className="list-disc space-y-2 pl-5 text-left leading-relaxed text-zinc-300 marker:text-emerald-500">
                    {demo.whyBullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ) : (
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
              )}
            </div>

            {!unlocked ? (
              <form
                onSubmit={handleSubmit}
                className="glass-card space-y-5 rounded-2xl p-8"
              >
                <p className="text-sm text-zinc-400">{demo.optInNotice}</p>
                <div className="space-y-2">
                  <Label htmlFor="demo-name" className="text-zinc-200">
                    Name
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
                    Company <span className="text-zinc-500">(optional)</span>
                  </Label>
                  <Input
                    id="demo-company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="border-zinc-600 bg-zinc-900/80 text-white"
                    autoComplete="organization"
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
                    <div className="mt-2">
                      <UnlockedBody demo={demo} phone={VOICE_DEMO_PHONE} />
                    </div>
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
                    assistantId={assistantId}
                  />
                ) : (
                  <div className="rounded-xl border border-zinc-600/50 bg-zinc-950/30 p-8 text-center text-zinc-400">
                    <p className="text-base text-zinc-300">
                      Voice demo is being configured. Add{' '}
                      <code className="text-emerald-400">NEXT_PUBLIC_VAPI_PUBLIC_KEY</code>{' '}
                      and{' '}
                      <code className="text-emerald-400">{assistantIdEnvName}</code> to your
                      environment to enable the live call.
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

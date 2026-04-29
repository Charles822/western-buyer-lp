'use client';

import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import { ConciergeDemoSection } from '@/components/voice-agent/concierge-demo-section';
import { FluidCanvas } from '@/components/voice-agent/fluid-canvas';
import { WeChatContactModal } from '@/components/voice-agent/wechat-contact-modal';
import { ConvertreeLogoLockup } from '@/components/convertree-logo-lockup';
import type { VoiceAgentLandingContent } from '@/lib/voice-agent-landing-content';

const SUPPORT_EMAIL = 'sam@convertree.com';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const processStepCircleBase =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white transition-colors duration-300';
const processStepCircleActive = 'bg-emerald-600 shadow-lg shadow-emerald-500/20';
const processStepCircleIdle = 'border border-zinc-700 bg-zinc-800';

const SERVICE_CARD_UI = [
  {
    hover: 'hover:border-emerald-500/50',
    gradFrom: 'from-emerald-500/5',
    iconBox: 'bg-emerald-500/10 text-emerald-400',
    check: 'text-emerald-500',
    icon: 'solar:widget-2-linear',
  },
  {
    hover: 'hover:border-green-500/50',
    gradFrom: 'from-green-500/5',
    iconBox: 'bg-green-500/10 text-green-400',
    check: 'text-green-500',
    icon: 'solar:document-text-linear',
  },
  {
    hover: 'hover:border-teal-500/50',
    gradFrom: 'from-teal-500/5',
    iconBox: 'bg-teal-500/10 text-teal-400',
    check: 'text-teal-500',
    icon: 'solar:users-group-two-rounded-linear',
  },
] as const;

type VoiceAgentLandingProps = {
  content: VoiceAgentLandingContent;
};

export function VoiceAgentLanding({ content }: VoiceAgentLandingProps) {
  const c = content;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [weChatOpen, setWeChatOpen] = useState(false);
  const [activeProcessStep, setActiveProcessStep] = useState(1);
  const processStep1Ref = useRef<HTMLDivElement>(null);
  const processStep2Ref = useRef<HTMLDivElement>(null);
  const processStep3Ref = useRef<HTMLDivElement>(null);

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    const nodes = [processStep1Ref.current, processStep2Ref.current, processStep3Ref.current].filter(
      (n): n is HTMLDivElement => n !== null
    );
    if (nodes.length !== 3) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length === 0) {
          return;
        }
        const winner = intersecting.reduce((a, b) =>
          b.intersectionRatio > a.intersectionRatio ? b : a
        );
        const step = Number((winner.target as HTMLElement).dataset.step);
        if (step >= 1 && step <= 3) {
          setActiveProcessStep(step);
        }
      },
      {
        root: null,
        rootMargin: '-36% 0px -36% 0px',
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <FluidCanvas />

      <div className="pointer-events-none fixed top-0 left-0 -z-20 h-full w-full min-h-screen overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-emerald-900/20 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-green-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
            <a href="#top" className="flex items-center" aria-label="Convertree">
              <ConvertreeLogoLockup variant="onDark" size="headerCompact" />
            </a>

            <nav className="hidden items-center gap-8 text-base font-medium text-zinc-400 md:flex">
              <button
                type="button"
                onClick={() => scrollToId('demo')}
                className="transition-colors hover:text-white"
              >
                Demo
              </button>
              <a href="#services" className="transition-colors hover:text-white">
                Offerings
              </a>
              <a href="#process" className="transition-colors hover:text-white">
                Process
              </a>
              <a href="#insights" className="transition-colors hover:text-white">
                Insights
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setWeChatOpen(true)}
              className="hidden items-center gap-2 text-base font-medium text-white transition-colors hover:text-emerald-400 md:inline-flex"
            >
              {c.wechatCta}
              <Icon icon="solar:arrow-right-linear" className="size-[1.1em]" aria-hidden />
            </button>

            <button
              type="button"
              className="text-zinc-400 md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <Icon icon="solar:hamburger-menu-linear" width="1.5em" height="1.5em" />
            </button>
          </div>

          <div
            id="mobile-menu"
            className={`absolute top-20 left-0 flex w-full flex-col gap-6 border-b border-zinc-800 bg-zinc-900 p-6 md:hidden ${mobileOpen ? '' : 'hidden'}`}
          >
            <button
              type="button"
              className="text-left text-lg text-zinc-400 hover:text-white"
              onClick={() => {
                scrollToId('demo');
                closeMobile();
              }}
            >
              Demo
            </button>
            <a
              href="#services"
              className="text-lg text-zinc-400 hover:text-white"
              onClick={closeMobile}
            >
              Offerings
            </a>
            <a
              href="#process"
              className="text-lg text-zinc-400 hover:text-white"
              onClick={closeMobile}
            >
              Process
            </a>
            <a
              href="#insights"
              className="text-lg text-zinc-400 hover:text-white"
              onClick={closeMobile}
            >
              Insights
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-left text-lg text-emerald-400 hover:text-emerald-300"
              onClick={() => {
                setWeChatOpen(true);
                closeMobile();
              }}
            >
              {c.wechatCta}
              <Icon icon="solar:arrow-right-linear" className="size-[1.1em]" aria-hidden />
            </button>
          </div>
        </header>

        <main id="top">
          <section className="relative overflow-hidden px-6 pt-44 pb-20 md:pt-52 md:pb-28">
            <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/15 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-5xl space-y-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium tracking-wide text-emerald-200">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                {c.hero.badge}
              </div>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
                {c.hero.title.kind === 'plain' ? (
                  <span className="mx-auto block max-w-4xl">{c.hero.title.h1}</span>
                ) : (
                  <>
                    {c.hero.title.h1Line1} <br className="hidden sm:block" />
                    {c.hero.title.h1Line2}
                    <span className="block bg-gradient-to-r from-emerald-200 to-emerald-500 bg-clip-text text-transparent md:inline md:bg-gradient-to-r">
                      {c.hero.title.h1Gradient}
                    </span>
                  </>
                )}
              </h1>

              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
                {c.hero.sub}
              </p>

              <div className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row md:gap-6">
                <a href="#demo" className="shiny-cta group text-base sm:text-lg">
                  <span>
                    {c.hero.ctaDemo}
                    <Icon
                      icon="solar:arrow-right-linear"
                      width="1.2em"
                      height="1.2em"
                      aria-hidden
                    />
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => scrollToId('process')}
                  className="flex items-center gap-3 rounded-full border border-zinc-700 px-8 py-4 text-lg font-medium text-zinc-200 transition-colors hover:bg-zinc-800"
                >
                  <Icon icon="solar:route-linear" width="1.2em" height="1.2em" />
                  {c.hero.ctaProcess}
                </button>
              </div>

              {c.hero.belowFold.mode === 'pillars' ? (
                <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/5 pt-14 sm:grid-cols-3">
                  {c.hero.belowFold.pillars.map((pillar) => (
                    <div key={pillar.title} className="text-center">
                      <p className="text-lg font-semibold text-white">{pillar.title}</p>
                      <p className="mt-2 text-sm text-zinc-500">{pillar.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mx-auto mt-14 max-w-5xl border-t border-white/5 pt-14 text-left">
                  <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {c.hero.belowFold.sectionTitle}
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {c.hero.belowFold.tiles.map((tile) => (
                      <div
                        key={tile.label}
                        className="glass-card rounded-2xl border border-white/5 p-6 transition-colors hover:border-emerald-500/30"
                      >
                        <p className="text-lg font-semibold text-white">{tile.label}</p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{tile.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          <ConciergeDemoSection demo={c.demo} leadSource={c.leadSource} />

          {c.valueEquation ? (
            <section
              className="border-b border-white/5 bg-zinc-950/40 py-16 md:py-20"
              aria-label="Why it works"
            >
              <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {c.valueEquation.cards.map((card) => (
                    <div
                      key={card.title}
                      className="glass-card flex flex-col rounded-2xl border border-emerald-500/10 bg-zinc-900/40 p-6"
                    >
                      <h3 className="text-lg font-semibold text-emerald-200">{card.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{card.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          <section className="border-y border-white/5 bg-zinc-900/30 py-14" aria-label="Stack">
            <div className="mx-auto max-w-7xl px-6 text-center">
              <p className="mb-8 text-sm tracking-widest text-zinc-500 uppercase">
                {c.stackLabel}
              </p>
              <div className="flex flex-wrap justify-center gap-10 opacity-80 transition-all duration-500 md:gap-16">
                <div className="flex items-center gap-2 text-lg font-medium text-zinc-300">
                  <Icon icon="simple-icons:n8n" width="1.5em" height="1.5em" />
                  n8n
                </div>
                <div className="flex items-center gap-2 text-lg font-medium text-zinc-300">
                  <Icon icon="simple-icons:openai" width="1.5em" height="1.5em" />
                  OpenAI
                </div>
                <div className="flex items-center gap-2 text-lg font-medium text-zinc-300">
                  <Icon icon="simple-icons:twilio" width="1.5em" height="1.5em" />
                  Twilio
                </div>
                <div className="flex items-center gap-2 text-lg font-medium text-zinc-300">
                  <Icon
                    icon="solar:database-linear"
                    width="1.5em"
                    height="1.5em"
                    className="text-emerald-500"
                  />
                  Your CRM
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="mx-auto max-w-7xl px-6 py-28">
            <div className="mb-20">
              <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {c.servicesIntro.title}
              </h2>
              <p className="max-w-2xl text-xl text-zinc-400">{c.servicesIntro.body}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {c.servicesCards.map((card, i) => {
                const ui = SERVICE_CARD_UI[i];
                return (
                  <div
                    key={card.title}
                    className={`glass-card group relative overflow-hidden rounded-2xl p-10 transition-colors ${ui.hover}`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${ui.gradFrom} to-transparent opacity-0 transition-opacity group-hover:opacity-100`}
                    />
                    <div
                      className={`relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-xl ${ui.iconBox} transition-transform group-hover:scale-110`}
                    >
                      <Icon icon={ui.icon} width="1.5em" height="1.5em" />
                    </div>
                    <h3 className="relative z-10 mb-4 text-2xl font-medium text-white">
                      {card.title}
                    </h3>
                    <p className="relative z-10 text-base leading-relaxed text-zinc-400">
                      {card.body}
                    </p>
                    <ul className="relative z-10 mt-6 space-y-3 text-sm text-zinc-500">
                      {card.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                          <Icon
                            icon="solar:check-circle-linear"
                            className={ui.check}
                            width="1.2em"
                            height="1.2em"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="process" className="border-y border-white/5 bg-zinc-900/20 py-28">
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex flex-col gap-20 md:flex-row">
                <div className="md:w-1/3 md:sticky md:top-32 md:h-fit">
                  <h2 className="mb-8 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    {c.processSticky.title}
                  </h2>
                  <p className="mb-10 text-xl text-zinc-400">{c.processSticky.body}</p>
                  <button
                    type="button"
                    onClick={() => setWeChatOpen(true)}
                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-6 py-3 text-base font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                  >
                    {c.wechatCta}
                    <Icon icon="solar:arrow-right-linear" className="size-[1.1em]" aria-hidden />
                  </button>
                </div>

                <div className="space-y-16 md:w-2/3">
                  {c.processSteps.map((step, idx) => {
                    const stepNum = idx + 1;
                    const ref =
                      stepNum === 1 ? processStep1Ref : stepNum === 2 ? processStep2Ref : processStep3Ref;
                    const showConnector = idx < 2;
                    return (
                      <div
                        key={step.title}
                        ref={ref}
                        data-step={stepNum}
                        className="flex scroll-mt-28 gap-8 md:scroll-mt-36"
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className={`${processStepCircleBase} ${activeProcessStep === stepNum ? processStepCircleActive : processStepCircleIdle}`}
                          >
                            {stepNum}
                          </div>
                          {showConnector ? <div className="my-4 h-full w-px grow bg-zinc-800" /> : null}
                        </div>
                        <div className={showConnector ? 'pb-2' : ''}>
                          <h3 className="mb-3 text-2xl font-medium text-white">{step.title}</h3>
                          <p className="text-lg text-zinc-400">{step.body}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section id="insights" className="mx-auto max-w-7xl px-6 py-28">
            <h2 className="mb-6 text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Insights
            </h2>
            <p className="mx-auto mb-20 max-w-2xl text-center text-xl text-zinc-400">
              {c.insightsIntro}
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {c.insightsPosts.map((post) => (
                <div
                  key={post.title}
                  className="glass-card flex flex-col overflow-hidden rounded-2xl p-0"
                >
                  <div className="h-32 w-full bg-zinc-900/80" />
                  <div className="flex grow flex-col p-8">
                    <span className="mb-2 text-sm font-medium text-zinc-500">{post.tag}</span>
                    <h3 className="mb-3 text-xl font-medium text-white">{post.title}</h3>
                    <p className="text-sm text-zinc-500">Link TBD for SEO</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="relative overflow-hidden px-6 py-32 text-center">
            <div className="absolute inset-0 -z-10 scale-50 transform rounded-full bg-emerald-900/20 blur-3xl" />

            <div className="mx-auto max-w-3xl space-y-10">
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {c.contact.title}
              </h2>
              <p className="text-xl text-zinc-300">{c.contact.body}</p>
              <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6">
                <a href="#demo" className="shiny-cta">
                  <span className="inline-flex whitespace-nowrap">{c.contact.ctaDemo}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setWeChatOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-8 py-4 text-lg font-medium text-zinc-200 transition-colors hover:border-emerald-500/50 hover:text-white"
                >
                  {c.wechatCta}
                  <Icon icon="solar:arrow-right-linear" className="size-[1.1em]" aria-hidden />
                </button>
              </div>
              <p className="text-sm text-zinc-500">
                Or email{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-emerald-400 hover:underline">
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </div>
          </section>
        </main>

        <footer className="border-t border-zinc-800 bg-zinc-950 py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-base text-zinc-500">
                © {new Date().getFullYear()} Convertree by Metaverse Lab Limited. All rights
                reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-base font-medium text-zinc-400 md:gap-10">
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>

      <WeChatContactModal open={weChatOpen} onClose={() => setWeChatOpen(false)} />
    </>
  );
}

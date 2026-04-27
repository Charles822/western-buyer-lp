'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';
import { ConciergeDemoSection } from '@/components/voice-agent/concierge-demo-section';
import { FluidCanvas } from '@/components/voice-agent/fluid-canvas';

const BOOKING =
  'https://api.leadconnectorhq.com/widget/booking/okwvmY2zrf7b7FccMC0w';
const SUPPORT_EMAIL = 'sam@convertree.com';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function VoiceAgentLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

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
            <a href="#top" className="flex items-center gap-3">
              <svg
                width="40"
                height="24"
                viewBox="0 0 48 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                aria-hidden
              >
                <path d="M8 28L14 18L20 28H8Z" fill="currentColor" />
                <path d="M18 28L28 12L38 28H18Z" fill="currentColor" />
                <path d="M30 28L42 4L54 28H30Z" fill="currentColor" />
              </svg>
              <span className="text-lg font-semibold tracking-tight text-white">
                Convertree
              </span>
            </a>

            <nav className="hidden items-center gap-8 text-base font-medium text-zinc-400 md:flex">
              <button
                type="button"
                onClick={() => scrollToId('demo')}
                className="transition-colors hover:text-white"
              >
                Demo
              </button>
              <a
                href="#services"
                className="transition-colors hover:text-white"
              >
                Offerings
              </a>
              <a
                href="#process"
                className="transition-colors hover:text-white"
              >
                Process
              </a>
              <a
                href="#insights"
                className="transition-colors hover:text-white"
              >
                Insights
              </a>
            </nav>

            <a
              href={BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-base font-medium text-white transition-colors hover:text-emerald-400 md:block"
            >
              Book a call
            </a>

            <button
              type="button"
              className="text-zinc-400 md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <Icon
                icon="solar:hamburger-menu-linear"
                width="1.5em"
                height="1.5em"
              />
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
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-emerald-400"
            >
              Book a call
            </a>
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
                PREMIUM VOICE CONCIERGE
              </div>

              <h1 className="text-5xl font-semibold tracking-tight text-white leading-[1.05] md:text-7xl">
                The premier AI concierge <br className="hidden sm:block" />
                for Asian exporters.{' '}
                <span className="block bg-gradient-to-r from-emerald-200 to-emerald-500 bg-clip-text text-transparent md:inline md:bg-gradient-to-r">
                  Every Western call handled in flawless English.
                </span>
              </h1>

              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
                When your one English speaker is away, importer calls go sideways—or get
                lost. Convertree is a custom voice concierge: trained on your products and
                operations, with tight guardrails, so you qualify and capture every serious
                buyer.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row md:gap-6">
                <a href="#demo" className="shiny-cta group">
                  <span className="flex items-center gap-2">
                    Try the concierge demo
                    <Icon
                      icon="solar:arrow-right-linear"
                      width="1.2em"
                      height="1.2em"
                    />
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => scrollToId('process')}
                  className="flex items-center gap-3 rounded-full border border-zinc-700 px-8 py-4 text-lg font-medium text-zinc-200 transition-colors hover:bg-zinc-800"
                >
                  <Icon
                    icon="solar:route-linear"
                    width="1.2em"
                    height="1.2em"
                  />
                  How we onboard clients
                </button>
              </div>

              <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/5 pt-14 sm:grid-cols-3">
                <div className="text-center">
                  <p className="text-lg font-semibold text-white">
                    Fluent English, 24/7
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">
                    Answers like your best sales engineer—on your number or web
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-white">
                    Your products, your rules
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">
                    Multi-round discovery &amp; guardrailed prompts—not a generic bot
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-white">CRM-ready</p>
                  <p className="mt-2 text-sm text-zinc-500">
                    Qualify, capture, and hand off to your team—already structured
                  </p>
                </div>
              </div>
            </div>
          </section>

          <ConciergeDemoSection />

          <section
            className="border-y border-white/5 bg-zinc-900/30 py-14"
            aria-label="Stack"
          >
            <div className="mx-auto max-w-7xl px-6 text-center">
              <p className="mb-8 text-sm tracking-widest text-zinc-500 uppercase">
                Plays with your stack
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
                Go beyond the base concierge
              </h2>
              <p className="max-w-2xl text-xl text-zinc-400">
                Optional add-ons for teams that want more automation, scale at the booth, or
                instant follow-up after a call. No public pricing on this page—we scope with
                you.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-colors hover:border-emerald-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-transform group-hover:scale-110">
                  <Icon
                    icon="solar:widget-2-linear"
                    width="1.5em"
                    height="1.5em"
                  />
                </div>
                <h3 className="relative z-10 mb-4 text-2xl font-medium text-white">
                  CRM &amp; workflow integration
                </h3>
                <p className="relative z-10 text-base leading-relaxed text-zinc-400">
                  Connect the concierge to the systems your sales team already uses—so
                  nothing sits in a silo. Routing, fields, and handoff rules you control.
                </p>
                <ul className="relative z-10 mt-6 space-y-3 text-sm text-zinc-500">
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="solar:check-circle-linear"
                      className="text-emerald-500"
                      width="1.2em"
                      height="1.2em"
                    />
                    Field mapping &amp; handoff
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="solar:check-circle-linear"
                      className="text-emerald-500"
                      width="1.2em"
                      height="1.2em"
                    />
                    n8n / automation glue
                  </li>
                </ul>
              </div>

              <div className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-colors hover:border-green-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition-transform group-hover:scale-110">
                  <Icon
                    icon="solar:document-text-linear"
                    width="1.5em"
                    height="1.5em"
                  />
                </div>
                <h3 className="relative z-10 mb-4 text-2xl font-medium text-white">
                  Automated lead magnets
                </h3>
                <p className="relative z-10 text-base leading-relaxed text-zinc-400">
                  After a call, send a customized AI summary or quote draft—optionally
                  for your rep to review before it goes out, so you move faster without
                  losing control.
                </p>
                <ul className="relative z-10 mt-6 space-y-3 text-sm text-zinc-500">
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="solar:check-circle-linear"
                      className="text-green-500"
                      width="1.2em"
                      height="1.2em"
                    />
                    Post-call follow-up assets
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="solar:check-circle-linear"
                      className="text-green-500"
                      width="1.2em"
                      height="1.2em"
                    />
                    Human-in-the-loop review
                  </li>
                </ul>
              </div>

              <div className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-colors hover:border-teal-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 transition-transform group-hover:scale-110">
                  <Icon
                    icon="solar:users-group-two-rounded-linear"
                    width="1.5em"
                    height="1.5em"
                  />
                </div>
                <h3 className="relative z-10 mb-4 text-2xl font-medium text-white">
                  Trade-fair &amp; per-product agents
                </h3>
                <p className="relative z-10 text-base leading-relaxed text-zinc-400">
                  Dedicated phone lines for a flagship machine or product line. Multiple
                  buyers can talk at once while your small team works the floor—serious
                  Q&amp;A in English, no translation scramble.
                </p>
                <ul className="relative z-10 mt-6 space-y-3 text-sm text-zinc-500">
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="solar:check-circle-linear"
                      className="text-teal-500"
                      width="1.2em"
                      height="1.2em"
                    />
                    On-the-spot product depth
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="solar:check-circle-linear"
                      className="text-teal-500"
                      width="1.2em"
                      height="1.2em"
                    />
                    Parallel conversations
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="process"
            className="border-y border-white/5 bg-zinc-900/20 py-28"
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex flex-col gap-20 md:flex-row">
                <div className="md:w-1/3 md:sticky md:top-32 md:h-fit">
                  <h2 className="mb-8 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    How we bring you live
                  </h2>
                  <p className="mb-10 text-xl text-zinc-400">
                    From first conversation to a production concierge and ongoing tuning—the
                    same pattern we use with exporter teams in machinery, parts, and
                    industrial B2B.
                  </p>
                  <a
                    href={BOOKING}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-zinc-100 px-6 py-3 text-base font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                  >
                    Book a call
                  </a>
                </div>

                <div className="space-y-16 md:w-2/3">
                  <div className="flex gap-8">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white shadow-lg shadow-emerald-500/20">
                        1
                      </div>
                      <div className="my-4 h-full w-px grow bg-zinc-800" />
                    </div>
                    <div className="pb-2">
                      <h3 className="mb-3 text-2xl font-medium text-white">
                        Value discovery
                      </h3>
                      <p className="text-lg text-zinc-400">
                        Structured Q&amp;A with sales or product (typically multiple
                        rounds): what the concierge can say, must not say, and how you ship.
                        We align on the Western buyer you serve.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-lg font-bold text-white">
                        2
                      </div>
                      <div className="my-4 h-full w-px grow bg-zinc-800" />
                    </div>
                    <div className="pb-2">
                      <h3 className="mb-3 text-2xl font-medium text-white">
                        Custom agent build
                      </h3>
                      <p className="text-lg text-zinc-400">
                        We wire your number, web entry points, and CRM—so qual calls land in
                        your process with the right fields. Guardrails and prompts are dialed
                        in for your catalog and your risk bar.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-lg font-bold text-white">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 text-2xl font-medium text-white">
                        Ongoing optimization
                      </h3>
                      <p className="text-lg text-zinc-400">
                        We monitor behavior, refine prompts, and help you add upsells (lead
                        magnets, booth agents) as you scale. You get a partner, not a
                        one-off handoff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="insights" className="mx-auto max-w-7xl px-6 py-28">
            <h2 className="mb-6 text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Insights
            </h2>
            <p className="mx-auto mb-20 max-w-2xl text-center text-xl text-zinc-400">
              We&apos;ll publish articles on voice QA for industrial buyers, running agents at
              trade shows, and more—placeholders for now while we focus on shipping.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  t: 'Coming soon',
                  d: 'Why generic voice bots break on high-ticket B2B calls',
                },
                {
                  t: 'Coming soon',
                  d: 'Designing a concierge for one flagship CNC line',
                },
                {
                  t: 'Coming soon',
                  d: 'From trade-floor chaos to parallel buyer conversations',
                },
              ].map((post) => (
                <div
                  key={post.d}
                  className="glass-card flex flex-col overflow-hidden rounded-2xl p-0"
                >
                  <div className="h-32 w-full bg-zinc-900/80" />
                  <div className="flex grow flex-col p-8">
                    <span className="mb-2 text-sm font-medium text-zinc-500">
                      {post.t}
                    </span>
                    <h3 className="mb-3 text-xl font-medium text-white">{post.d}</h3>
                    <p className="text-sm text-zinc-500">Link TBD for SEO</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="relative overflow-hidden px-6 py-32 text-center"
          >
            <div className="absolute inset-0 -z-10 scale-50 transform rounded-full bg-emerald-900/20 blur-3xl" />

            <div className="mx-auto max-w-3xl space-y-10">
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Hear it for yourself, then we&apos;ll scope your build
              </h2>
              <p className="text-xl text-zinc-300">
                Try the opt-in voice demo above, or book a call—we&apos;ll map your buyers,
                your products, and what &quot;good&quot; handoff looks like in your CRM.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6">
                <a href="#demo" className="shiny-cta">
                  <span>Try the concierge demo</span>
                </a>
                <a
                  href={BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-600 px-8 py-4 text-lg font-medium text-zinc-200 transition-colors hover:border-emerald-500/50 hover:text-white"
                >
                  Book a strategy call
                </a>
              </div>
              <p className="text-sm text-zinc-500">
                Or email{' '}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-emerald-400 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </div>
          </section>
        </main>

        <footer className="border-t border-zinc-800 bg-zinc-950 py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
            <div className="text-base text-zinc-500">
              © {new Date().getFullYear()} Convertree. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-base font-medium text-zinc-400 md:gap-10">
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

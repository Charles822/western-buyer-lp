'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';
import { FluidCanvas } from '@/components/voice-agent/fluid-canvas';

const BOOKING =
  'https://api.leadconnectorhq.com/widget/booking/okwvmY2zrf7b7FccMC0w';
const ABOUT_IMAGE =
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg';

export function VoiceAgentLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <div className="flex items-center gap-3">
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
              Elevate Business
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-base font-medium text-zinc-400 md:flex">
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
            <a href="#process" className="transition-colors hover:text-white">
              Process
            </a>
            <a href="#insights" className="transition-colors hover:text-white">
              Insights
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
          </nav>

          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-base font-medium text-white transition-colors hover:text-emerald-400 md:block"
          >
            Book a Call →
          </a>

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
          <a
            href="#services"
            className="text-lg text-zinc-400 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </a>
          <a
            href="#process"
            className="text-lg text-zinc-400 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Process
          </a>
          <a
            href="#insights"
            className="text-lg text-zinc-400 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Insights
          </a>
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-emerald-400"
          >
            Book Strategy Call
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pt-44 pb-24 md:pt-52 md:pb-36">
          <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/15 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-5xl space-y-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium tracking-wide text-emerald-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              ACCEPTING NEW CLIENTS
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white leading-[1.05] md:text-8xl">
              We Build AI Systems That <br />
              <span className="bg-gradient-to-r from-emerald-200 to-emerald-500 bg-clip-text text-transparent">
                Call, Chat, and Convert.
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
              Stop losing leads to slow response times. We design custom AI voice
              agents and automation workflows that replace manual follow-ups and
              scale your operations instantly.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 pt-6 md:flex-row">
              <a
                href={BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="shiny-cta group"
              >
                <span className="flex items-center gap-2">
                  Book a Free Strategy Call
                  <Icon icon="solar:arrow-right-linear" width="1.2em" height="1.2em" />
                </span>
              </a>

              <a
                href="#insights"
                className="flex items-center gap-3 rounded-full border border-zinc-700 px-8 py-4 text-lg font-medium text-zinc-200 transition-colors hover:bg-zinc-800"
              >
                <Icon icon="solar:book-linear" width="1.2em" height="1.2em" />
                Read Our Insights
              </a>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-10 border-t border-white/5 pt-16 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">100k+</p>
                <p className="mt-2 text-sm tracking-wide text-zinc-500 uppercase">
                  AI Calls Made
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="mt-2 text-sm tracking-wide text-zinc-500 uppercase">
                  Uptime Support
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">30%</p>
                <p className="mt-2 text-sm tracking-wide text-zinc-500 uppercase">
                  Conv. Increase
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">40+</p>
                <p className="mt-2 text-sm tracking-wide text-zinc-500 uppercase">
                  Systems Built
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-zinc-900/30 py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mb-10 text-base tracking-widest text-zinc-500 uppercase">
              Powering Automation for Agencies &amp; SMAs using
            </p>
            <div className="flex flex-wrap justify-center gap-10 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 md:gap-20">
              <div className="flex items-center gap-3 text-2xl font-semibold text-zinc-300 transition-colors hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.474 5.684a2.53 2.53 0 0 0-2.447 1.895H16.13a2.526 2.526 0 0 0-2.492 2.11l-.103.624a1.26 1.26 0 0 1-1.246 1.055h-1.001a2.527 2.527 0 0 0-4.893 0H4.973a2.527 2.527 0 1 0 0 1.264h1.422a2.527 2.527 0 0 0 4.894 0h1a1.26 1.26 0 0 1 1.247 1.055l.103.623a2.526 2.526 0 0 0 2.492 2.111h.37a2.527 2.527 0 1 0 0-1.263h-.37a1.26 1.26 0 0 1-1.246-1.056l-.103-.623A2.52 2.52 0 0 0 13.96 12a2.52 2.52 0 0 0 .82-1.48l.104-.622a1.26 1.26 0 0 1 1.246-1.056h2.896a2.527 2.527 0 1 0 2.447-3.158m0 1.263a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.264A1.263 1.263 0 0 1 20.21 8.21a1.263 1.263 0 0 1 1.264-1.263m-18.948 3.79A1.263 1.263 0 0 1 3.79 12a1.263 1.263 0 0 1-1.264 1.263A1.263 1.263 0 0 1 1.263 12a1.263 1.263 0 0 1 1.263-1.263m6.316 0A1.263 1.263 0 0 1 10.105 12a1.263 1.263 0 0 1-1.263 1.263A1.263 1.263 0 0 1 7.58 12a1.263 1.263 0 0 1 1.263-1.263m10.106 3.79a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.263a1.263 1.263 0 0 1-1.264-1.263a1.263 1.263 0 0 1 1.263-1.264"
                  />
                </svg>{' '}
                n8n
              </div>
              <div className="flex items-center gap-3 text-2xl font-semibold text-zinc-300 transition-colors hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z"
                  />
                </svg>{' '}
                OpenAI
              </div>
              <div className="flex items-center gap-3 text-2xl font-semibold text-zinc-300 transition-colors hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 0C5.381-.008.008 5.352 0 11.971V12c0 6.64 5.359 12 12 12c6.64 0 12-5.36 12-12c0-6.641-5.36-12-12-12m0 20.801c-4.846.015-8.786-3.904-8.801-8.75V12a8.777 8.777 0 0 1 8.75-8.801H12a8.776 8.776 0 0 1 8.801 8.75V12c.015 4.847-3.904 8.786-8.75 8.801zm5.44-11.76a2.49 2.49 0 0 1-2.481 2.479a2.49 2.49 0 0 1-2.479-2.479a2.49 2.49 0 0 1 2.479-2.481a2.493 2.493 0 0 1 2.481 2.481m0 5.919c0 1.36-1.12 2.48-2.481 2.48a2.49 2.49 0 0 1-2.479-2.48a2.49 2.49 0 0 1 2.479-2.479a2.49 2.49 0 0 1 2.481 2.479m-5.919 0c0 1.36-1.12 2.48-2.479 2.48a2.49 2.49 0 0 1-2.481-2.48a2.49 2.49 0 0 1 2.481-2.479a2.49 2.49 0 0 1 2.479 2.479m0-5.919a2.49 2.49 0 0 1-2.479 2.479a2.49 2.49 0 0 1-2.481-2.479A2.493 2.493 0 0 1 9.042 6.56a2.493 2.493 0 0 1 2.479 2.481"
                  />
                </svg>{' '}
                Twilio
              </div>
              <div className="flex items-center gap-3 text-2xl font-semibold text-zinc-300 transition-colors hover:text-white">
                <svg
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <circle cx="4" cy="4" r="1.5" />
                  <circle cx="10" cy="4" r="1.5" />
                  <circle cx="16" cy="4" r="1.5" />
                  <circle cx="22" cy="4" r="1.5" />
                  <circle cx="4" cy="10" r="1.5" />
                  <circle cx="22" cy="10" r="1.5" />
                  <circle cx="4" cy="16" r="1.5" />
                  <circle cx="22" cy="16" r="1.5" />
                  <circle cx="4" cy="22" r="1.5" />
                  <circle cx="10" cy="22" r="1.5" />
                  <circle cx="16" cy="22" r="1.5" />
                  <circle cx="22" cy="22" r="1.5" />
                  <circle cx="10" cy="10" r="3" />
                  <circle cx="16" cy="10" r="3" />
                  <circle cx="10" cy="16" r="3" />
                  <circle cx="16" cy="16" r="3" />
                </svg>
                Retell AI
              </div>
              <div className="flex items-center gap-3 text-2xl font-semibold text-zinc-300 transition-colors hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.27 3.27 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.3 3.3 0 0 0-1.272-.257M23.4 8.056a.6.6 0 0 0-.222.045l-10.012 3.877a.61.61 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.58.58 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.64.64 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006l.307-.147l2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.6.6 0 0 0-.207-.044z"
                  />
                </svg>{' '}
                Airtable
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-28">
          <div className="mb-20">
            <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Core Automation Services
            </h2>
            <p className="max-w-2xl text-xl text-zinc-400">
              We don&apos;t just &quot;use AI&quot;. We architect robust infrastructure
              that handles communication and data processing for you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-colors hover:border-emerald-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-transform group-hover:scale-110">
                <Icon icon="solar:microphone-3-linear" width="1.5em" height="1.5em" />
              </div>
              <h3 className="relative z-10 mb-4 text-2xl font-medium text-white">
                AI Voice Agents
              </h3>
              <p className="relative z-10 mb-6 text-base leading-relaxed text-zinc-400">
                Inbound and outbound calling agents powered by Retell AI. They handle
                qualifying leads, booking appointments, and customer support
                inquiries 24/7.
              </p>
              <ul className="relative z-10 space-y-3 text-sm text-zinc-500">
                <li className="flex items-center gap-3">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="text-emerald-500"
                    width="1.2em"
                    height="1.2em"
                  />
                  Sub-800ms latency
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="text-emerald-500"
                    width="1.2em"
                    height="1.2em"
                  />
                  Custom knowledge base
                </li>
              </ul>
            </div>

            <div className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-colors hover:border-green-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition-transform group-hover:scale-110">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="relative z-10 mb-4 text-2xl font-medium text-white">
                WhatsApp Automation
              </h3>
              <p className="relative z-10 mb-6 text-base leading-relaxed text-zinc-400">
                Direct integration with WhatsApp Business API. Auto-reply to leads,
                nurture prospects, and sync conversations directly to your CRM.
              </p>
              <ul className="relative z-10 space-y-3 text-sm text-zinc-500">
                <li className="flex items-center gap-3">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="text-green-500"
                    width="1.2em"
                    height="1.2em"
                  />
                  Instant lead response
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="text-green-500"
                    width="1.2em"
                    height="1.2em"
                  />
                  Multi-step flows
                </li>
              </ul>
            </div>

            <div className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-colors hover:border-teal-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 transition-transform group-hover:scale-110">
                <Icon
                  icon="solar:round-transfer-horizontal-linear"
                  width="1.5em"
                  height="1.5em"
                />
              </div>
              <h3 className="relative z-10 mb-4 text-2xl font-medium text-white">
                CRM &amp; n8n Workflows
              </h3>
              <p className="relative z-10 mb-6 text-base leading-relaxed text-zinc-400">
                The glue that holds it all together. We build complex n8n workflows
                that connect your forms, spreadsheets, and AI agents into one
                seamless machine.
              </p>
              <ul className="relative z-10 space-y-3 text-sm text-zinc-500">
                <li className="flex items-center gap-3">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="text-teal-500"
                    width="1.2em"
                    height="1.2em"
                  />
                  Error-free data entry
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="text-teal-500"
                    width="1.2em"
                    height="1.2em"
                  />
                  Automated reporting
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
              <div className="sticky top-32 h-fit md:w-1/3">
                <h2 className="mb-8 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  How We Build Your System
                </h2>
                <p className="mb-10 text-xl text-zinc-400">
                  A transparent, engineering-focused approach. No magic, just logic.
                </p>
                <a
                  href={BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-zinc-100 px-6 py-3 text-base font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                >
                  Start the Process
                </a>
              </div>

              <div className="space-y-16 md:w-2/3">
                <div className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white shadow-lg shadow-emerald-500/20">
                      1
                    </div>
                    <div className="my-4 h-full w-px bg-zinc-800" />
                  </div>
                  <div className="pb-6">
                    <h3 className="mb-3 text-2xl font-medium text-white">
                      Audit &amp; Logic Design
                    </h3>
                    <p className="text-lg text-zinc-400">
                      We map out your current manual processes. We design the
                      conversation flow and data logic before writing a single line
                      of code.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-lg font-bold text-white">
                      2
                    </div>
                    <div className="my-4 h-full w-px bg-zinc-800" />
                  </div>
                  <div className="pb-6">
                    <h3 className="mb-3 text-2xl font-medium text-white">
                      Build &amp; Integration
                    </h3>
                    <p className="text-lg text-zinc-400">
                      Connecting Retell AI/Twilio with your CRM via n8n. We configure
                      the LLM prompts to match your brand voice and sales objectives.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-lg font-bold text-white">
                      3
                    </div>
                    <div className="my-4 h-full w-px bg-zinc-800" />
                  </div>
                  <div className="pb-6">
                    <h3 className="mb-3 text-2xl font-medium text-white">
                      Testing with Real Data
                    </h3>
                    <p className="text-lg text-zinc-400">
                      Rigorous testing to ensure the AI handles objections, accents,
                      and edge cases correctly. We refine latency and response
                      quality.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-lg font-bold text-white">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-medium text-white">
                      Deployment &amp; Handoff
                    </h3>
                    <p className="text-lg text-zinc-400">
                      The system goes live. We provide documentation and a dashboard
                      so you can monitor calls and leads without needing us.
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
            Deep dives into AI voice technology, automation strategy, and the future
            of work.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <a
              href="#"
              className="glass-card group flex flex-col overflow-hidden rounded-2xl p-0 transition-all duration-300 hover:border-emerald-500/30"
            >
              <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-zinc-900 to-zinc-950 transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex grow flex-col p-8">
                <div className="mb-3 flex items-center gap-3 text-sm font-medium text-emerald-400">
                  <span>Strategy</span>
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                  <span className="text-zinc-500">Oct 12, 2024</span>
                </div>
                <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-emerald-400">
                  The End of Cold Calling?
                </h3>
                <p className="mb-6 line-clamp-2 text-base leading-relaxed text-zinc-400">
                  How AI voice agents are outperforming human SDRs in qualification
                  and booking rates by 30%.
                </p>
                <div className="mt-auto flex items-center text-sm font-medium text-white transition-all group-hover:gap-2">
                  Read Article{' '}
                  <Icon icon="solar:arrow-right-linear" width="1.2em" height="1.2em" />
                </div>
              </div>
            </a>

            <a
              href="#"
              className="glass-card group flex flex-col overflow-hidden rounded-2xl p-0 transition-all duration-300 hover:border-emerald-500/30"
            >
              <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-green-900/40 via-zinc-900 to-zinc-950 transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex grow flex-col p-8">
                <div className="mb-3 flex items-center gap-3 text-sm font-medium text-emerald-400">
                  <span>Tech</span>
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                  <span className="text-zinc-500">Oct 08, 2024</span>
                </div>
                <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-emerald-400">
                  Reducing Voice Latency
                </h3>
                <p className="mb-6 line-clamp-2 text-base leading-relaxed text-zinc-400">
                  Technical breakdown of how we achieved sub-800ms response times
                  using Retell AI and edge computing.
                </p>
                <div className="mt-auto flex items-center text-sm font-medium text-white transition-all group-hover:gap-2">
                  Read Article{' '}
                  <Icon icon="solar:arrow-right-linear" width="1.2em" height="1.2em" />
                </div>
              </div>
            </a>

            <a
              href="#"
              className="glass-card group flex flex-col overflow-hidden rounded-2xl p-0 transition-all duration-300 hover:border-emerald-500/30"
            >
              <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/40 via-zinc-900 to-zinc-950 transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex grow flex-col p-8">
                <div className="mb-3 flex items-center gap-3 text-sm font-medium text-emerald-400">
                  <span>Tutorial</span>
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                  <span className="text-zinc-500">Sep 28, 2024</span>
                </div>
                <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-emerald-400">
                  Scaling Agency Ops with n8n
                </h3>
                <p className="mb-6 line-clamp-2 text-base leading-relaxed text-zinc-400">
                  Why we switched from Zapier to self-hosted n8n for heavy-duty
                  automation workflows.
                </p>
                <div className="mt-auto flex items-center text-sm font-medium text-white transition-all group-hover:gap-2">
                  Read Article{' '}
                  <Icon icon="solar:arrow-right-linear" width="1.2em" height="1.2em" />
                </div>
              </div>
            </a>
          </div>
        </section>

        <section
          id="about"
          className="border-t border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900 pt-28 pb-28"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center gap-16 md:flex-row">
              <div className="w-full md:w-5/12">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800 grayscale transition-all duration-700 hover:grayscale-0 shadow-2xl">
                  <img
                    src={ABOUT_IMAGE}
                    alt="Elevate Business"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full space-y-8 md:w-7/12">
                <h2 className="text-4xl font-semibold tracking-tight text-white">
                  About Elevate Business.
                </h2>
                <h3 className="text-2xl font-medium text-emerald-400">
                  We build systems, not demos.
                </h3>
                <p className="text-lg leading-relaxed text-zinc-300">
                  The AI space is full of noise. Everyone is selling a course or
                  showing off a flashy demo that breaks in production. We operate
                  differently.
                </p>
                <p className="text-lg leading-relaxed text-zinc-300">
                  We are developers focused on stability and ROI. Our background in
                  software engineering means we build automation infrastructures
                  that scale with your business, handle errors gracefully, and
                  actually deliver the time-savings promised.
                </p>
                <div className="flex gap-6 pt-6">
                  <a href="#" className="text-2xl text-zinc-500 transition-colors hover:text-white" aria-label="LinkedIn">
                    <Icon icon="lucide:linkedin" width="1em" height="1em" />
                  </a>
                  <a href="#" className="text-2xl text-zinc-500 transition-colors hover:text-white" aria-label="Twitter">
                    <Icon icon="lucide:twitter" width="1em" height="1em" />
                  </a>
                  <a href="#" className="text-2xl text-zinc-500 transition-colors hover:text-white" aria-label="GitHub">
                    <Icon icon="lucide:github" width="1em" height="1em" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden px-6 py-36 text-center"
        >
          <div className="absolute inset-0 -z-10 scale-50 transform rounded-full bg-emerald-900/20 blur-3xl" />

          <div className="mx-auto max-w-3xl space-y-10">
            <h2 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Ready to automate the busy work?
            </h2>
            <p className="text-xl text-zinc-300">
              If manual follow-ups and missed calls are slowing your business down,
              this will fix it. Let&apos;s build your system.
            </p>
            <div className="flex justify-center pt-6">
              <a
                href={BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="shiny-cta"
              >
                <span>Book Your Strategy Call</span>
              </a>
            </div>
            <p className="mt-10 text-sm text-zinc-500">
              No commitment required. 15-minute discovery chat.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-950 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div className="text-base text-zinc-500">
            © 2024 Elevate Business. All rights reserved.
          </div>
          <div className="flex gap-10 text-base font-medium text-zinc-400">
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>
            <a
              href="mailto:hello@elevatebusiness.com"
              className="transition-colors hover:text-white"
            >
              Email Us
            </a>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

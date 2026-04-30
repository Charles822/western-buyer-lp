'use client';

import { Icon } from '@iconify/react';

const AVATAR_SRC =
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80';

/**
 * Decorative in-call phone frame (visual only; no real controls).
 * `evelyn` = voice-concierge copy (Evelyn header, no “Western buyer” pill).
 * Wave animation uses `.voice-agent-phone-waves .bar` in voice-agent.css.
 */
export function VoiceAgentPhoneMockup({ variant = 'default' }: { variant?: 'default' | 'evelyn' }) {
  const isEvelyn = variant === 'evelyn';
  return (
    <div className="flex w-full justify-center lg:justify-start">
      <div
        className="relative h-[520px] w-[260px] overflow-hidden rounded-[32px] border-[5px] border-zinc-800 bg-[#0a0a0a] shadow-[0_0_40px_rgba(0,0,0,0.5),0_0_80px_rgba(16,185,129,0.12)] sm:h-[600px] sm:w-[300px] sm:rounded-[36px] sm:border-[6px] md:h-[640px] md:w-[320px] md:rounded-[40px]"
        aria-hidden
      >
        {/* Status bar */}
        <div className="absolute left-0 top-0 z-20 flex h-11 w-full items-end justify-between px-5 pb-2 sm:h-12 sm:px-6">
          <span className="text-xs font-medium text-white">9:41</span>
          <div className="flex items-center gap-1.5">
            <Icon icon="lucide:signal" className="size-3 text-white" />
            <Icon icon="lucide:wifi" className="size-3 text-white" />
            <div className="relative h-2.5 w-4 rounded-[2px] border border-white/30">
              <div className="absolute inset-0.5 rounded-[1px] bg-white" />
            </div>
          </div>
        </div>

        {/* Screen */}
        <div className="absolute inset-0 flex flex-col items-center bg-gradient-to-b from-zinc-950 via-emerald-950/35 to-emerald-950/90 px-5 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24">
          <div className="relative mb-5 h-20 w-20 sm:mb-6 sm:h-24 sm:w-24">
            <div className="absolute inset-0 animate-pulse rounded-full bg-emerald-500/20 blur-xl" />
            {/* eslint-disable-next-line @next/next/no-img-element -- external demo asset */}
            <img
              src={AVATAR_SRC}
              alt=""
              className="relative z-10 size-full rounded-full border-2 border-white/10 object-cover"
            />
            <div className="absolute bottom-0 right-0 z-20 flex size-6 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a]">
              <div className="size-2.5 animate-pulse rounded-full bg-emerald-500" />
            </div>
          </div>

          <div className="mb-2 space-y-1 text-center">
            <h3
              className={
                isEvelyn
                  ? 'text-center text-base font-semibold leading-snug text-white sm:text-lg'
                  : 'text-lg font-semibold text-white sm:text-xl'
              }
            >
              {isEvelyn ? (
                <>
                  Meet Evelyn,{' '}
                  <span className="block sm:inline">Convertree concierge</span>
                </>
              ) : (
                'Convertree concierge'
              )}
            </h3>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">
              Voice demo
            </p>
          </div>

          {!isEvelyn ? (
            <div className="mb-10 flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 sm:mb-12">
              <div className="size-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-white/50">
                Western buyer <span className="font-medium text-white">experience</span>
              </span>
            </div>
          ) : (
            <div className="mb-10 sm:mb-12" aria-hidden />
          )}

          <div className="voice-agent-phone-waves mb-auto flex h-14 items-center gap-1.5 sm:h-16">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>

          <div className="mt-auto grid w-full grid-cols-3 gap-3 sm:gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-12 items-center justify-center rounded-full bg-white/10 sm:size-14">
                <Icon icon="lucide:mic-off" className="size-5 text-white sm:size-6" />
              </div>
              <span className="text-[10px] text-white/50">Mute</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-12 items-center justify-center rounded-full bg-white/10 sm:size-14">
                <Icon icon="lucide:volume-2" className="size-5 text-white sm:size-6" />
              </div>
              <span className="text-[10px] text-white/50">Speaker</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-12 items-center justify-center rounded-full bg-red-500 shadow-lg shadow-red-500/20 sm:size-14">
                <Icon icon="lucide:phone-off" className="size-5 text-white sm:size-6" />
              </div>
              <span className="text-[10px] text-white/50">End</span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-30 rounded-[27px] bg-gradient-to-tr from-white/5 to-transparent sm:rounded-[30px] md:rounded-[34px]" />
      </div>
    </div>
  );
}

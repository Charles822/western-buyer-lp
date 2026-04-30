import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Convertree — Logo alternatives (demo)',
  description: 'Header mockups comparing logo alternatives from /public/logo-alternatives.',
};

const ALT_FILES = [
  'WhatsApp Image 2026-04-29 at 18.09.41.jpeg',
  'WhatsApp Image 2026-04-29 at 18.09.41 (1).jpeg',
  'WhatsApp Image 2026-04-29 at 18.09.41 (2).jpeg',
] as const;

function LockupRow({
  src,
  label,
  variant,
}: {
  src: string;
  label: string;
  variant: 'dark' | 'light';
}) {
  const text = variant === 'dark' ? 'text-white' : 'text-stone-900';
  const bar =
    variant === 'dark'
      ? 'border-b border-white/10 bg-zinc-950/90 backdrop-blur-md'
      : 'border-b border-stone-200 bg-white/95 backdrop-blur-md shadow-sm';

  return (
    <div className={`flex h-20 items-center justify-between px-6 ${bar}`}>
      <span className="inline-flex items-end gap-2">
        <Image
          src={src}
          alt=""
          width={512}
          height={512}
          className="h-9 w-auto shrink-0 object-contain object-bottom sm:h-10"
          sizes="120px"
        />
        <span className={`text-lg font-semibold leading-none tracking-tight sm:text-xl ${text}`}>
          Convertree
        </span>
      </span>
      <span
        className={`hidden text-xs font-medium sm:inline ${variant === 'dark' ? 'text-zinc-500' : 'text-stone-400'}`}
      >
        {label}
      </span>
    </div>
  );
}

function ProductionLockup({ variant }: { variant: 'dark' | 'light' }) {
  const src =
    variant === 'dark' ? '/convertree_new_logo_white.png' : '/convertree_new_logo.png';
  const w = variant === 'dark' ? 356 : 1276;
  const h = variant === 'dark' ? 648 : 832;
  const text = variant === 'dark' ? 'text-white' : 'text-stone-900';
  const bar =
    variant === 'dark'
      ? 'border-b border-white/10 bg-zinc-950/90 backdrop-blur-md'
      : 'border-b border-stone-200 bg-white/95 backdrop-blur-md shadow-sm';

  return (
    <div className={`flex h-20 items-center px-6 ${bar}`}>
      <span className="inline-flex items-end gap-2">
        <Image
          src={src}
          alt=""
          width={w}
          height={h}
          className="h-9 w-auto shrink-0 object-contain object-bottom sm:h-10"
          sizes="120px"
        />
        <span className={`text-lg font-semibold leading-none tracking-tight sm:text-xl ${text}`}>
          Convertree
        </span>
      </span>
    </div>
  );
}

export default function LogoAlternativesDemoPage() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="mx-auto max-w-4xl px-4 py-10 pb-24">
        <p className="mb-2 text-sm font-medium text-emerald-400">
          <Link href="/" className="underline-offset-2 hover:underline">
            Home
          </Link>
          {' · '}
          <Link href="/voice-agent" className="underline-offset-2 hover:underline">
            Voice agent
          </Link>
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Logo lockup preview
        </h1>
        <p className="mt-2 max-w-2xl text-zinc-400">
          Same header strip as product pages: mark + wordmark &quot;Convertree&quot;. Compare files in{' '}
          <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm text-zinc-300">
            /public/logo-alternatives/
          </code>{' '}
          on dark (voice-style) and light (landing-style) bars.
        </p>

        <section className="mt-12 space-y-4">
          <h2 className="text-lg font-semibold text-zinc-200">Current production</h2>
          <div className="overflow-hidden rounded-xl border border-zinc-700 ring-1 ring-white/5">
            <ProductionLockup variant="dark" />
            <ProductionLockup variant="light" />
          </div>
          <p className="text-xs text-zinc-500">
            Dark: <code className="text-zinc-400">convertree_new_logo_white.png</code> · Light:{' '}
            <code className="text-zinc-400">convertree_new_logo.png</code>
          </p>
        </section>

        {ALT_FILES.map((filename) => {
          const src = `/logo-alternatives/${encodeURIComponent(filename)}`;
          return (
            <section key={filename} className="mt-14 space-y-4">
              <h2 className="break-all font-mono text-sm font-medium text-zinc-300">{filename}</h2>
              <div className="overflow-hidden rounded-xl border border-zinc-700 ring-1 ring-white/5">
                <LockupRow src={src} label="Dark bar (voice / zinc)" variant="dark" />
                <LockupRow src={src} label="Light bar (landing)" variant="light" />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

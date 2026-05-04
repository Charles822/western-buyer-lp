import Link from 'next/link';

export function LegalPageShell({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <Link
            href="/"
            className="text-sm font-medium text-emerald-700 hover:text-emerald-800 hover:underline"
          >
            ← Convertree home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-stone-500">Last Updated: {lastUpdated}</p>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-stone-700">{children}</div>
      </article>
    </div>
  );
}

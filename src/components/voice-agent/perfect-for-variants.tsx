export type PerfectForChip = { label: string };

export type PerfectForChipsProps = {
  sectionTitle: string;
  tiles: PerfectForChip[];
  showSectionHeading?: boolean;
};

/** Compact label-only chips; wrap horizontally (no per-tile subtext). */
export function PerfectForChips({
  sectionTitle,
  tiles,
  showSectionHeading = true,
}: PerfectForChipsProps) {
  return (
    <div>
      {showSectionHeading ? (
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white md:mb-8 md:text-3xl">
          {sectionTitle}
        </h2>
      ) : null}
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-3.5">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className="inline-flex max-w-full min-w-0 items-center rounded-xl border border-white/10 bg-zinc-900/50 px-3.5 py-2.5 text-center text-sm font-medium text-white shadow-sm ring-1 ring-white/5 sm:px-4 sm:text-base"
          >
            <span className="min-w-0 text-balance leading-snug">{tile.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

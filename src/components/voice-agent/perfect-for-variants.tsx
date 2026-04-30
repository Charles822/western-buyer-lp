export type PerfectForTile = { label: string; description: string };

export type PerfectForProps = {
  sectionTitle: string;
  tiles: PerfectForTile[];
  /** When false, only the list is rendered (no section heading). Default true. */
  showSectionHeading?: boolean;
};

export function PerfectForEditorial({
  sectionTitle,
  tiles,
  showSectionHeading = true,
}: PerfectForProps) {
  return (
    <div className="text-left">
      {showSectionHeading ? (
        <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {sectionTitle}
        </h2>
      ) : null}
      <div className="border-t border-white/10">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className="group border-b border-white/10 py-7 transition-colors last:border-b-0 hover:bg-emerald-500/4 md:relative md:pl-4 md:before:absolute md:before:top-0 md:before:left-0 md:before:h-full md:before:w-1 md:before:rounded-full md:before:bg-transparent md:before:transition-colors md:group-hover:before:bg-emerald-500/60"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-10">
              <p className="shrink-0 text-lg font-semibold tracking-tight text-white md:max-w-52 md:text-xl">
                {tile.label}
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-right md:text-base">
                {tile.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

const FLAGS = [
  { src: '/flags/us.svg', alt: 'USA' },
  { src: '/flags/gb.svg', alt: 'UK' },
  { src: '/flags/fr.svg', alt: 'France' },
  { src: '/flags/de.svg', alt: 'Germany' },
  { src: '/flags/nl.svg', alt: 'Netherlands' },
  { src: '/flags/za.svg', alt: 'South Africa' },
];

interface FlagMarqueeProps {
  tagline: string;
}

export function FlagMarquee({ tagline }: FlagMarqueeProps) {
  return (
    <div className="w-1/2 overflow-hidden py-3 [border:none] [outline:none] [box-shadow:none]">
      <p className="text-center text-sm text-stone-600 mb-2 font-medium">{tagline}</p>
      <div className="marquee flex w-max gap-12">
        {[...FLAGS, ...FLAGS].map((flag, i) => (
          <img
            key={`${flag.alt}-${i}`}
            src={flag.src}
            alt={flag.alt}
            className="h-8 w-8 flex-shrink-0 rounded-sm object-contain opacity-60 saturate-75"
          />
        ))}
      </div>
    </div>
  );
}

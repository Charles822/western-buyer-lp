import type { VoiceValueEquationCard } from '@/lib/voice-agent-landing-content';

export type ValueEquationVariantProps = {
  cards: readonly [VoiceValueEquationCard, VoiceValueEquationCard, VoiceValueEquationCard, VoiceValueEquationCard];
};

export function ValueEquationBigNumbers({ cards }: ValueEquationVariantProps) {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6">
      {cards.map((card) => (
        <div key={card.title} className="text-left">
          {card.stat != null && card.stat !== '' ? (
            <p
              className="font-bold tracking-tight text-emerald-400"
              style={{ fontSize: 'clamp(2.75rem, 8vw, 4.5rem)', lineHeight: 1.05 }}
            >
              {card.stat}
            </p>
          ) : (
            <p className="text-2xl font-semibold tracking-tight text-emerald-200">{card.title}</p>
          )}
          {(card.stat != null && card.stat !== '' ? card.statLabel : null) ? (
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-zinc-400">
              {card.statLabel}
            </p>
          ) : null}
          {card.stat != null && card.stat !== '' ? (
            <p className="mt-1 text-sm font-medium text-zinc-300">{card.title}</p>
          ) : null}
          <p className="mt-4 text-sm leading-relaxed text-zinc-500">{card.body}</p>
        </div>
      ))}
    </div>
  );
}

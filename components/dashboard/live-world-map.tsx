'use client';

import { useMemo, useState } from 'react';
import type { CountryItem } from '@/lib/types/dashboard';

type LiveWorldMapProps = { countries: CountryItem[] };

const hotspotCoordinates: Record<string, { x: number; y: number }> = {
  Arjantin: { x: 32, y: 78 },
  Şili: { x: 28, y: 72 },
  Türkiye: { x: 57, y: 36 },
};

export function LiveWorldMap({ countries }: LiveWorldMapProps) {
  const [hovered, setHovered] = useState<CountryItem | null>(null);

  const mapItems = useMemo(
    () =>
      countries
        .filter((item) => hotspotCoordinates[item.country])
        .map((item) => ({ ...item, position: hotspotCoordinates[item.country] })),
    [countries],
  );

  return (
    <section className="dashboard-enter mb-8 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl md:p-6">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-xl font-bold">Canlı Dünya Haritası</h2>
        <span className="text-xs text-[var(--muted)]">Gerçek Zamanlı Takip</span>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[radial-gradient(circle_at_top,#1f2937_0%,#0b1020_60%)] p-3 md:p-4">
        <svg viewBox="0 0 100 50" className="h-[240px] w-full md:h-[360px]" role="img" aria-label="Dünya haritası">
          <path d="M4 19 L10 14 L18 16 L24 13 L30 18 L28 25 L19 28 L13 24 L8 27 L4 23 Z" fill="rgba(255,255,255,0.18)" />
          <path d="M24 30 L30 29 L35 33 L33 43 L27 45 L21 38 Z" fill="rgba(255,255,255,0.16)" />
          <path d="M34 16 L39 12 L47 14 L55 12 L62 16 L67 15 L74 20 L71 26 L63 27 L56 25 L51 29 L45 26 L40 28 L36 23 Z" fill="rgba(255,255,255,0.18)" />
          <path d="M72 29 L80 30 L87 34 L84 40 L76 39 L69 34 Z" fill="rgba(255,255,255,0.16)" />

          {mapItems.map((item) => {
            const hasCases = item.cases > 0;
            return (
              <g key={item.country} onMouseEnter={() => setHovered(item)} onMouseLeave={() => setHovered(null)} onFocus={() => setHovered(item)} onBlur={() => setHovered(null)}>
                <circle cx={item.position.x} cy={item.position.y} r={hasCases ? 1.8 : 1.4} className={hasCases ? 'fill-red-500' : 'fill-emerald-400'} />
                {hasCases ? <circle cx={item.position.x} cy={item.position.y} r={3.8} className="fill-red-500/25" /> : null}
              </g>
            );
          })}
        </svg>

        <div className="pointer-events-none absolute left-3 top-3 rounded-lg border border-white/20 bg-black/45 px-3 py-2 text-xs text-white md:text-sm">
          {hovered ? (
            <>
              <p className="font-bold">{hovered.country}</p>
              <p>Vaka: {hovered.cases}</p>
              <p>Ölüm: {hovered.deaths}</p>
            </>
          ) : (
            <p>Ülke noktalarının üzerine gelin</p>
          )}
        </div>
      </div>
    </section>
  );
}

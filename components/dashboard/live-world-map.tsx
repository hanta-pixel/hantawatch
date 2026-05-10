'use client';

import type { CountryRiskPoint } from '@/types/dashboard-realtime';
import { getRiskColor } from '@/utils/risk';

type LiveWorldMapProps = {
  countries: CountryRiskPoint[];
};

function project(lat: number, lng: number) {
  const x = ((lng + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
}

export function LiveWorldMap({ countries }: LiveWorldMapProps) {
  return (
    <section className="dashboard-enter mb-8 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl md:p-6">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-xl font-bold">Canlı Dünya Haritası</h2>
        <span className="text-xs text-[var(--muted)]">Gerçek Zamanlı Takip</span>
      </div>

      <div className="relative h-[260px] overflow-hidden rounded-2xl border border-white/20 bg-[radial-gradient(circle_at_top,#1f2937_0%,#0b1020_60%)] md:h-[380px]">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-cover bg-center opacity-35" />

        {countries.map((country) => {
          const pos = project(country.lat, country.lng);
          const color = getRiskColor(country.risk);

          return (
            <div
              key={country.code}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            >
              <span className="block h-3 w-3 rounded-full ring-4 ring-white/10" style={{ backgroundColor: color }} />
              <div className="pointer-events-none absolute left-1/2 top-5 z-10 hidden w-40 -translate-x-1/2 rounded-lg border border-white/25 bg-black/80 px-2 py-1 text-xs text-white group-hover:block group-focus-within:block">
                <p className="font-semibold">{country.country}</p>
                <p>Vaka: {country.cases}</p>
                <p>Ölüm: {country.deaths}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

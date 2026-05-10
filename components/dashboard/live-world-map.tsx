'use client';

import type { CountryRiskPoint } from '@/types/dashboard-realtime';
import { getRiskColor } from '@/utils/risk';

type LiveWorldMapProps = {
  countries: CountryRiskPoint[];
};

const riskLabel: Record<CountryRiskPoint['risk'], string> = {
  low: 'Düşük',
  medium: 'Orta',
  high: 'Yüksek',
};

function project(lat: number, lng: number) {
  const x = ((lng + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
}

export function LiveWorldMap({ countries }: LiveWorldMapProps) {
  return (
    <section className="dashboard-enter mb-8 rounded-3xl border border-red-500/25 bg-black/50 p-4 shadow-[0_0_60px_rgba(220,38,38,0.2)] backdrop-blur-xl md:p-6">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-black text-zinc-100 md:text-2xl">Canlı Risk Haritası</h2>
          <p className="mt-1 text-xs text-zinc-400">Kırmızı hotspotlar aktif vaka bölgelerini gösterir.</p>
        </div>
        <span className="w-fit rounded-full border border-red-400/35 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-200">LIVE HEALTH INTEL</span>
      </div>

      <div className="mb-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1 text-emerald-300">Düşük Risk</span>
        <span className="rounded-full border border-amber-400/35 bg-amber-500/10 px-3 py-1 text-amber-300">Orta Risk</span>
        <span className="rounded-full border border-red-400/35 bg-red-500/10 px-3 py-1 text-red-300">Yüksek Risk</span>
      </div>

      <div className="relative h-[300px] overflow-hidden rounded-2xl border border-red-500/25 bg-[radial-gradient(circle_at_10%_10%,rgba(239,68,68,0.20),rgba(3,7,18,0.96)_42%,rgba(0,0,0,1)_100%)] md:h-[440px]">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-cover bg-center opacity-20 saturate-0" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-red-500/10 to-transparent" />

        {countries.map((country) => {
          const pos = project(country.lat, country.lng);
          const color = getRiskColor(country.risk);

          return (
            <button
              key={country.code}
              type="button"
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              aria-label={`${country.country} risk hotspot`}
            >
              <span className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full opacity-30 blur-md" style={{ backgroundColor: color }} />
              <span className="relative block h-4 w-4 rounded-full border border-white/80 shadow-[0_0_24px_rgba(248,113,113,0.9)]" style={{ backgroundColor: color }} />

              <span className="pointer-events-none absolute left-1/2 top-8 z-20 hidden w-52 -translate-x-1/2 rounded-xl border border-red-400/30 bg-zinc-950/95 p-3 text-left text-xs text-zinc-100 shadow-2xl group-hover:block group-focus:block">
                <strong className="block text-sm text-red-200">{country.country}</strong>
                <span className="mt-1 block">Vaka: {country.cases}</span>
                <span className="block">Ölüm: {country.deaths}</span>
                <span className="block">Risk: {riskLabel[country.risk]}</span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

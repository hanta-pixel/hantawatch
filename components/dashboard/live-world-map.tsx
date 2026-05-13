'use client';
import type { CountryRiskPoint } from '@/types/dashboard-realtime';
import { getRiskColor } from '@/utils/risk';

type LiveWorldMapProps = { countries: CountryRiskPoint[]; live: boolean };
const riskLabel: Record<CountryRiskPoint['risk'], string> = { low: 'Düşük', medium: 'Orta', high: 'Yüksek' };
const project = (lat: number, lng: number) => ({ x: ((lng + 180) / 360) * 100, y: ((90 - lat) / 180) * 100 });

export function LiveWorldMap({ countries, live }: LiveWorldMapProps) {
  return <section className="dashboard-enter mb-4 rounded-2xl border border-white/10 bg-[var(--card-bg)] p-4 md:p-5">
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-lg font-extrabold">Canlı Risk Haritası</h2>
      <div className="flex items-center gap-2 text-xs text-zinc-300"><span className={`h-2 w-2 rounded-full ${live ? 'bg-red-400' : 'bg-amber-400'} animate-pulse`} />Realtime: {live ? 'Canlı' : 'Senkronize'}</div>
    </div>
    <div className="relative h-[320px] overflow-hidden rounded-xl border border-white/10 bg-[#05070d] md:h-[420px]">
      <div className="absolute inset-0 bg-[url('/world-map-real.svg')] bg-cover bg-center opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_50%,rgba(53,80,120,0.18),rgba(4,7,12,0.86)_68%)]" />
      {countries.map((country) => { const pos = project(country.lat, country.lng); const color = getRiskColor(country.risk); return <button key={country.code} type="button" className="group absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${pos.x}%`, top: `${pos.y}%` }}><span className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 blur-xl" style={{ backgroundColor: color }} /><span className="relative block h-3 w-3 rounded-full border border-white/80 shadow-[0_0_22px_currentColor]" style={{ backgroundColor: color, color }} /><span className="pointer-events-none absolute left-1/2 top-7 z-20 hidden w-52 -translate-x-1/2 rounded-xl border border-white/15 bg-zinc-950/95 p-3 text-left text-xs text-zinc-100 shadow-2xl group-hover:block group-focus:block"><strong className="block text-sm text-red-200">{country.country}</strong><span className="block">Vaka: {country.cases}</span><span className="block">Ölüm: {country.deaths}</span><span className="block">Risk: {riskLabel[country.risk]}</span></span></button>; })}
    </div>
  </section>;
}

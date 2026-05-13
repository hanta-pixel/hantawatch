'use client';
import type { CountryRiskPoint } from '@/types/dashboard-realtime';
import { getRiskColor } from '@/utils/risk';

type LiveWorldMapProps = { countries: CountryRiskPoint[]; live: boolean };
const riskLabel: Record<CountryRiskPoint['risk'], string> = { low: 'Düşük', medium: 'Orta', high: 'Yüksek' };
const project = (lat: number, lng: number) => ({ x: ((lng + 180) / 360) * 100, y: ((90 - lat) / 180) * 100 });

export function LiveWorldMap({ countries, live }: LiveWorldMapProps) {
  return <section className="dashboard-enter mb-6 rounded-3xl border border-white/10 bg-[var(--card-bg)] p-4 md:p-6">
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-xl font-black">Canlı Risk Haritası</h2>
      <div className="flex items-center gap-2 text-xs text-zinc-300"><span className={`h-2 w-2 rounded-full ${live ? 'bg-red-400' : 'bg-amber-400'} animate-pulse`} />Realtime status: {live ? 'Canlı' : 'Senkronize'}</div>
    </div>
    <div className="mb-4 flex items-center justify-center gap-5 text-xs text-zinc-300">
      <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />Düşük</span>
      <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-amber-400" />Orta</span>
      <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400" />Yüksek</span>
    </div>

    <div className="relative h-[330px] overflow-hidden rounded-2xl border border-white/10 bg-[#05070d] md:h-[430px]">
      <div className="absolute inset-0 bg-[url('/globe.svg')] bg-cover bg-center opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_45%,rgba(17,24,39,0.25),rgba(3,5,8,0.88)_75%)]" />
      {countries.map((country) => { const pos = project(country.lat, country.lng); const color = getRiskColor(country.risk); return <button key={country.code} type="button" className="group absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${pos.x}%`, top: `${pos.y}%` }}><span className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 blur-lg animate-pulse" style={{ backgroundColor: color }} /><span className="relative block h-3.5 w-3.5 rounded-full border border-white/75" style={{ backgroundColor: color }} /><span className="pointer-events-none absolute left-1/2 top-7 z-20 hidden w-52 -translate-x-1/2 rounded-xl border border-white/15 bg-zinc-950/95 p-3 text-left text-xs text-zinc-100 shadow-2xl group-hover:block group-focus:block group-active:block"><strong className="block text-sm text-red-200">{country.country}</strong><span className="block">Vaka: {country.cases}</span><span className="block">Ölüm: {country.deaths}</span><span className="block">Risk: {riskLabel[country.risk]}</span></span></button>; })}
    </div>
  </section>;
}

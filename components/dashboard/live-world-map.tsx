'use client';
import { useState } from 'react';
import { calculateRisk } from '@/lib/risk/calculate-risk';
import type { CountryCase } from '@/lib/types/dashboard';

type Props = { countries: CountryCase[] };
const pos: Record<string, { left: string; top: string }> = { ARG: { left: '31%', top: '72%' }, CHL: { left: '28%', top: '69%' }, TUR: { left: '55%', top: '38%' }, USA: { left: '19%', top: '33%' } };

export function LiveWorldMap({ countries }: Props) {
  const [selected, setSelected] = useState<CountryCase | null>(null);
  return <section className="dashboard-enter mb-8 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl md:p-6"><h2 className="mb-4 text-xl font-bold">Canlı Dünya Haritası</h2><div className="relative h-[260px] overflow-hidden rounded-2xl border border-white/20 bg-[url('/world-map.svg')] bg-cover bg-center md:h-[380px]">
    {countries.filter((c)=>pos[c.code]).map((c)=>{return <button key={c.code} onMouseEnter={()=>setSelected(c)} onClick={()=>setSelected(c)} className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/70" style={{left:pos[c.code].left,top:pos[c.code].top,background:c.cases>0?'#ef4444':'#10b981'}} aria-label={c.country} />})}
    <div className="absolute left-3 top-3 rounded-lg border border-white/20 bg-black/60 px-3 py-2 text-xs md:text-sm">{selected ? (()=>{const r=calculateRisk(selected.cases,selected.deaths,selected.symptomsIndex);return <><p className="font-bold">{selected.country}</p><p>Vaka: {selected.cases} • Ölüm: {selected.deaths}</p><p>Risk: {r.level} ({r.score})</p></>})() : 'Noktaya hover/tap yapın'}</div></div></section>;
}

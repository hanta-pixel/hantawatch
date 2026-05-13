'use client';

import type { CountryRiskPoint, TrendPoint } from '@/types/dashboard-realtime';
import { ReusableCard } from './reusable-card';

type CaseChartsProps = { trend: TrendPoint[]; countries: CountryRiskPoint[] };

export function CaseCharts({ trend, countries }: CaseChartsProps) {
  const sorted = [...countries].sort((a, b) => b.cases - a.cases).slice(0, 5);
  const max = Math.max(...trend.map((t) => t.cases), 1);
  const points = trend.map((t, i) => `${(i / Math.max(trend.length - 1, 1)) * 100},${100 - (t.cases / max) * 100}`).join(' ');

  return <section className="mb-6 grid gap-3 lg:grid-cols-3">
    <ReusableCard title="Günlük Vaka Trendi" className="premium-hover lg:col-span-1">
      <div className="mt-1 h-48 rounded-lg border border-white/10 bg-[#080c15] p-3">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs><linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgba(239,68,68,0.42)" /><stop offset="1" stopColor="rgba(239,68,68,0)" /></linearGradient></defs>
          <g stroke="rgba(120,134,160,0.25)" strokeWidth="0.4">{[20, 40, 60, 80].map((y) => <line key={y} x1="0" y1={y} x2="100" y2={y} />)}</g>
          <polyline points={points} fill="none" stroke="#f05252" strokeWidth="2" />
          <polygon points={`0,100 ${points} 100,100`} fill="url(#lineFill)" />
        </svg>
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-zinc-400">{trend.map((t) => <span key={t.day}>{t.day}</span>)}</div>
    </ReusableCard>

    <ReusableCard title="En Çok Vaka Görülen Ülkeler" className="premium-hover lg:col-span-1">
      <div className="space-y-1.5 text-sm">{sorted.map((country) => <div key={country.code} className="flex items-center justify-between border-b border-white/10 py-2"><span className="text-zinc-200">{country.country}</span><span className="font-bold text-red-400">{country.cases}</span></div>)}</div>
    </ReusableCard>

    <ReusableCard title="AI Risk Analyzer" description="Belirtileriniz ve maruziyetiniz doğrultusunda riskinizi analiz edin." className="premium-hover lg:col-span-1">
      <div className="rounded-lg border border-red-500/20 bg-[linear-gradient(160deg,rgba(56,12,18,0.25),rgba(8,10,16,0.4))] p-3">
        <p className="text-xs text-zinc-300">AI destekli klinik ön tarama paneli</p>
        <button className="mt-3 w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500">Risk Analizine Başla</button>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-zinc-400">Tıbbi tavsiye değildir. Sağlık sorununuz varsa doktora danışın.</p>
    </ReusableCard>
  </section>;
}

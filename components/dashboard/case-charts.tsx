'use client';

import type { CountryRiskPoint, TrendPoint } from '@/types/dashboard-realtime';
import { ReusableCard } from './reusable-card';

type CaseChartsProps = { trend: TrendPoint[]; countries: CountryRiskPoint[] };

export function CaseCharts({ trend, countries }: CaseChartsProps) {
  const sorted = [...countries].sort((a, b) => b.cases - a.cases).slice(0, 5);
  const max = Math.max(...trend.map((t) => t.cases), 1);
  const points = trend.map((t, i) => `${(i / Math.max(trend.length - 1, 1)) * 100},${100 - (t.cases / max) * 100}`).join(' ');

  return <section className="mb-8 grid gap-4 lg:grid-cols-3">
    <ReusableCard title="Günlük Vaka Trendi" className="premium-hover lg:col-span-1">
      <div className="mt-2 h-52 rounded-xl border border-white/10 bg-[#090d16] p-3">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polyline points={points} fill="none" stroke="#ef4444" strokeWidth="2" />
          <polygon points={`0,100 ${points} 100,100`} fill="rgba(239,68,68,0.24)" />
        </svg>
      </div>
      <div className="mt-2 flex justify-between text-xs text-zinc-400">{trend.map((t) => <span key={t.day}>{t.day}</span>)}</div>
    </ReusableCard>

    <ReusableCard title="En Çok Vaka Görülen Ülkeler" className="premium-hover lg:col-span-1">
      <div className="space-y-2 text-sm">{sorted.map((country) => <div key={country.code} className="flex items-center justify-between border-b border-white/10 py-2"><span className="text-zinc-200">{country.country}</span><span className="font-bold text-red-400">{country.cases}</span></div>)}</div>
    </ReusableCard>

    <ReusableCard title="AI Risk Analyzer" description="Belirtileriniz ve maruziyetiniz doğrultusunda riskinizi analiz edin." className="premium-hover lg:col-span-1">
      <button className="mt-2 w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-500">Risk Analizine Başla</button>
      <p className="mt-5 text-sm text-zinc-400">Tıbbi tavsiye değildir. Sağlık sorununuz varsa doktora danışın.</p>
    </ReusableCard>
  </section>;
}

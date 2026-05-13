import type { CountryRiskPoint, TrendPoint } from '@/types/dashboard-realtime';
import { ReusableCard } from './reusable-card';

type CaseChartsProps = { trend: TrendPoint[]; countries: CountryRiskPoint[] };

export function CaseCharts({ trend, countries }: CaseChartsProps) {
  const maxTrend = Math.max(...trend.map((d) => d.cases), 1);
  const sorted = [...countries].sort((a, b) => b.cases - a.cases).slice(0, 5);

  return <section className="mb-8 grid gap-6 lg:grid-cols-3">
    <ReusableCard title="Günlük Vaka Trendi" className="lg:col-span-1">
      <div className="mt-4 flex h-48 items-end gap-2">{trend.map((point) => <div key={point.day} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t bg-gradient-to-t from-red-950 via-red-700 to-red-400" style={{ height: `${(point.cases / maxTrend) * 100}%` }} /><span className="text-xs text-zinc-400">{point.day}</span></div>)}</div>
    </ReusableCard>

    <ReusableCard title="En Çok Vaka Görülen Ülkeler" className="lg:col-span-1">
      <div className="space-y-2 text-sm">{sorted.map((country) => <div key={country.code} className="flex items-center justify-between border-b border-white/10 py-1.5"><span>{country.country}</span><span className="font-bold text-red-300">{country.cases}</span></div>)}</div>
    </ReusableCard>

    <ReusableCard title="AI Risk Analyzer" description="Belirtileriniz ve maruziyetiniz doğrultusunda riskinizi analiz edin." className="lg:col-span-1">
      <button className="mt-2 w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-500">Risk Analizine Başla</button>
      <p className="mt-5 text-sm text-zinc-400">Tıbbi tavsiye değildir. Herhangi bir sağlık sorununuz varsa doktorunuza danışın.</p>
    </ReusableCard>
  </section>;
}

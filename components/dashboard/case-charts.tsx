import type { CountryRiskPoint, TrendPoint } from '@/types/dashboard-realtime';
import { ReusableCard } from './reusable-card';

type CaseChartsProps = { trend: TrendPoint[]; countries: CountryRiskPoint[] };

export function CaseCharts({ trend, countries }: CaseChartsProps) {
  const maxTrend = Math.max(...trend.map((d) => d.cases), 1);
  const maxCountry = Math.max(...countries.map((d) => d.cases), 1);
  return <section className="mb-8 grid gap-6 lg:grid-cols-3">
    <ReusableCard title="Günlük Vaka Trendi" className="lg:col-span-2">
      <div className="mt-4 flex h-48 items-end gap-2">{trend.map((point) => <div key={point.day} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t bg-gradient-to-t from-red-800 to-red-300" style={{ height: `${(point.cases / maxTrend) * 100}%` }} /><span className="text-xs text-[var(--muted)]">{point.day}</span></div>)}</div>
    </ReusableCard>
    <ReusableCard title="Vaka/Ölüm Oranı">
      <div className="space-y-2 text-sm">{countries.map((country) => <div key={country.code} className="flex justify-between"><span>{country.country}</span><span>{country.cases}/{country.deaths || 1}</span></div>)}</div>
    </ReusableCard>
    <ReusableCard title="Ülke Karşılaştırma" className="lg:col-span-3">
      <div className="grid gap-3 md:grid-cols-2">{countries.map((country) => <div key={country.code}><div className="mb-1 flex justify-between text-xs"><span>{country.country}</span><span>{country.cases}</span></div><div className="h-2 rounded bg-white/10"><div className="h-2 rounded bg-rose-400" style={{ width: `${(country.cases / maxCountry) * 100}%` }} /></div></div>)}</div>
    </ReusableCard>
  </section>;
}

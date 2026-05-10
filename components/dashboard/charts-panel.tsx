import type { CountryCase, TrendPoint } from '@/lib/types/dashboard';

type Props = { trend: TrendPoint[]; countries: CountryCase[] };

export function ChartsPanel({ trend, countries }: Props) {
  const maxTrend = Math.max(...trend.map((t) => t.cases), 1);
  const maxCountry = Math.max(...countries.map((c) => c.cases), 1);

  return (
    <section className="dashboard-enter mb-8 grid gap-6 lg:grid-cols-2">
      <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
        <h3 className="mb-4 text-lg font-bold">Vaka Trend Grafiği</h3>
        <div className="flex h-44 items-end gap-3">
          {trend.map((point) => <div key={point.day} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t-lg bg-red-500/80" style={{ height: `${(point.cases / maxTrend) * 100}%` }} /><span className="text-xs text-[var(--muted)]">{point.day}</span></div>)}
        </div>
      </article>
      <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
        <h3 className="mb-4 text-lg font-bold">Ülke Bazlı Vaka Dağılımı</h3>
        <div className="space-y-3">
          {countries.map((country) => <div key={country.code}><div className="mb-1 flex justify-between text-sm"><span>{country.country}</span><span>{country.cases}</span></div><div className="h-2 rounded bg-[var(--surface)]"><div className="h-2 rounded bg-red-500" style={{ width: `${(country.cases / maxCountry) * 100}%` }} /></div></div>)}
        </div>
      </article>
    </section>
  );
}

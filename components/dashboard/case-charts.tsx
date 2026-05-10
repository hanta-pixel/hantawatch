import type { CountryRiskPoint, TrendPoint } from '@/types/dashboard-realtime';

type CaseChartsProps = {
  trend: TrendPoint[];
  countries: CountryRiskPoint[];
};

export function CaseCharts({ trend, countries }: CaseChartsProps) {
  const maxTrend = Math.max(...trend.map((d) => d.cases), 1);
  const maxCountry = Math.max(...countries.map((d) => d.cases), 1);

  return (
    <section className="mb-8 grid gap-6 lg:grid-cols-2">
      <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
        <h3 className="text-lg font-bold">Günlük Vaka Trendi</h3>
        <div className="mt-4 flex h-40 items-end gap-2">
          {trend.map((point) => (
            <div key={point.day} className="flex flex-1 flex-col items-center gap-2">
              <div className="w-full rounded-t bg-cyan-400/80" style={{ height: `${(point.cases / maxTrend) * 100}%` }} />
              <span className="text-xs text-[var(--muted)]">{point.day}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
        <h3 className="text-lg font-bold">Ülke Bazlı Karşılaştırma</h3>
        <div className="mt-4 space-y-3">
          {countries.map((country) => (
            <div key={country.code}>
              <div className="mb-1 flex justify-between text-xs">
                <span>{country.country}</span>
                <span>{country.cases}</span>
              </div>
              <div className="h-2 rounded bg-white/10">
                <div className="h-2 rounded bg-rose-400" style={{ width: `${(country.cases / maxCountry) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

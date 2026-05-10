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
      <article className="rounded-3xl border border-red-500/20 bg-black/45 p-5 shadow-[0_0_40px_rgba(220,38,38,0.14)] backdrop-blur-xl">
        <h3 className="text-lg font-bold text-zinc-100">Günlük Vaka Trendi</h3>
        <div className="mt-4 flex h-44 items-end gap-2 rounded-2xl border border-white/10 bg-black/30 p-3">
          {trend.map((point) => (
            <div key={point.day} className="flex flex-1 flex-col items-center gap-2">
              <div className="w-full rounded-t bg-gradient-to-t from-red-700 to-red-400" style={{ height: `${(point.cases / maxTrend) * 100}%` }} />
              <span className="text-xs text-zinc-400">{point.day}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-3xl border border-red-500/20 bg-black/45 p-5 shadow-[0_0_40px_rgba(220,38,38,0.14)] backdrop-blur-xl">
        <h3 className="text-lg font-bold text-zinc-100">Ülke Bazlı Karşılaştırma</h3>
        <div className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-black/30 p-3">
          {countries.map((country) => (
            <div key={country.code}>
              <div className="mb-1 flex justify-between text-xs text-zinc-200">
                <span>{country.country}</span>
                <span>{country.cases}</span>
              </div>
              <div className="h-2 rounded bg-zinc-800">
                <div className="h-2 rounded bg-gradient-to-r from-red-700 to-red-400" style={{ width: `${(country.cases / maxCountry) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

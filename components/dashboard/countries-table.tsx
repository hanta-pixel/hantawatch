import type { CountryItem } from '@/lib/types/dashboard';

type CountriesTableProps = { countries: CountryItem[] };

const statusClass: Record<CountryItem['status'], string> = {
  İzleniyor: 'bg-red-600/20 text-red-400',
  'Kontrol Altında': 'bg-emerald-600/20 text-emerald-400',
  'Resmi Vaka Yok': 'bg-sky-600/20 text-sky-400',
};

export function CountriesTable({ countries }: CountriesTableProps) {
  return (
    <section className="dashboard-enter mb-8 overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--card-border)] p-5">
        <h2 className="text-xl font-bold">Ülkelere Göre Vaka Takibi</h2>
        <input placeholder="Ülke ara..." className="w-full rounded-xl border border-[var(--card-border)] bg-[var(--surface)] px-3 py-2 sm:w-56" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left">
          <thead>
            <tr className="text-sm text-[var(--muted)]">
              <th className="px-5 py-3">Ülke</th><th className="px-5 py-3">Vaka</th><th className="px-5 py-3">Ölüm</th><th className="px-5 py-3">Durum</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((item) => (
              <tr key={item.country} className="border-t border-[var(--card-border)]">
                <td className="px-5 py-4 font-semibold">{item.country}</td>
                <td className="px-5 py-4">{item.cases}</td>
                <td className="px-5 py-4">{item.deaths}</td>
                <td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-sm ${statusClass[item.status]}`}>{item.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

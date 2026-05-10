import { calculateRisk } from '@/lib/risk/calculate-risk';
import type { CountryCase } from '@/lib/types/dashboard';

export function RiskPanel({ countries }: { countries: CountryCase[] }) {
  const avg = Math.round(countries.reduce((acc, c) => acc + calculateRisk(c.cases, c.deaths, c.symptomsIndex).score, 0) / Math.max(countries.length, 1));
  const level = avg >= 70 ? 'Yüksek' : avg >= 40 ? 'Orta' : 'Düşük';

  return <section className="dashboard-enter mb-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5"><h2 className="text-xl font-bold">AI Risk Analizi</h2><p className="mt-2 text-[var(--muted)]">Vaka, ölüm ve belirti skorlarına göre hesaplanan bölgesel risk: <span className="font-semibold text-white">{level}</span></p><p className="mt-1 text-sm text-[var(--muted)]">Ortalama Risk Skoru: {avg}/100</p></section>;
}

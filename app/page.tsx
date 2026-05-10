'use client';

import { ChartsPanel } from '@/components/dashboard/charts-panel';
import { CountriesTable } from '@/components/dashboard/countries-table';
import { Hero } from '@/components/dashboard/hero';
import { LiveWorldMap } from '@/components/dashboard/live-world-map';
import { NewsPanel } from '@/components/dashboard/news-panel';
import { ProductsPanel } from '@/components/dashboard/products-panel';
import { RiskPanel } from '@/components/dashboard/risk-panel';
import { Stats } from '@/components/dashboard/stats';
import { useLiveCases } from '@/hooks/use-live-cases';
import type { StatItem } from '@/lib/types/dashboard';

export default function Page() {
  const { data, error, loading } = useLiveCases();

  if (loading || !data) return <main className="mx-auto w-full max-w-7xl p-6">Yükleniyor...</main>;

  const stats: StatItem[] = [
    { label: 'Doğrulanmış Vaka', value: String(data.totals.confirmed), trend: 'Canlı veri akışı' },
    { label: 'Şüpheli Vaka', value: String(data.totals.suspected) },
    { label: 'Ölüm', value: String(data.totals.deaths) },
    { label: 'Son Güncelleme', value: new Date(data.updatedAt).toLocaleTimeString('tr-TR') },
  ];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8">
      <Hero />
      {error ? <p className="mb-4 rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">{error} (fallback veri gösteriliyor)</p> : null}
      <Stats items={stats} />
      <LiveWorldMap countries={data.countries} />
      <RiskPanel countries={data.countries} />
      <ChartsPanel trend={data.trend} countries={data.countries} />
      <CountriesTable countries={data.countries} />
      <section className="grid gap-6 lg:grid-cols-2">
        <NewsPanel items={data.news} />
        <ProductsPanel items={data.products} />
      </section>
    </main>
  );
}

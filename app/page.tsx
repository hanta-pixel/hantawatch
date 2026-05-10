'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChartsPanel } from '@/components/dashboard/charts-panel';
import { CountriesTable } from '@/components/dashboard/countries-table';
import { Hero } from '@/components/dashboard/hero';
import { LiveWorldMap } from '@/components/dashboard/live-world-map';
import { NewsPanel } from '@/components/dashboard/news-panel';
import { ProductsPanel } from '@/components/dashboard/products-panel';
import { RiskPanel } from '@/components/dashboard/risk-panel';
import { Stats } from '@/components/dashboard/stats';
import type { DashboardPayload, StatItem } from '@/lib/types/dashboard';

export default function Page() {
  const [data, setData] = useState<DashboardPayload | null>(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      const res = await fetch('/api/cases', { cache: 'no-store' });
      const json = (await res.json()) as DashboardPayload;
      if (active) setData(json);
    };
    load();
    const timer = setInterval(load, 15000);
    return () => { active = false; clearInterval(timer); };
  }, []);

  const stats = useMemo<StatItem[]>(() => {
    if (!data) return [];
    return [
      { label: 'Doğrulanmış Vaka', value: String(data.totals.confirmed), trend: 'Canlı veri akışı' },
      { label: 'Şüpheli Vaka', value: String(data.totals.suspected) },
      { label: 'Ölüm', value: String(data.totals.deaths) },
      { label: 'Son Güncelleme', value: new Date(data.updatedAt).toLocaleTimeString('tr-TR') },
    ];
  }, [data]);

  if (!data) return <main className="mx-auto w-full max-w-7xl p-6">Yükleniyor...</main>;

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8">
      <Hero />
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

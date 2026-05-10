'use client';

import { CaseCharts } from '@/components/dashboard/case-charts';
import { CountriesTable } from '@/components/dashboard/countries-table';
import { Hero } from '@/components/dashboard/hero';
import { LiveWorldMap } from '@/components/dashboard/live-world-map';
import { NewsPanel } from '@/components/dashboard/news-panel';
import { ProductsPanel } from '@/components/dashboard/products-panel';
import { Stats } from '@/components/dashboard/stats';
import { useRealtimeDashboard } from '@/hooks/use-realtime-dashboard';
import type { NewsItem, ProductItem, StatItem } from '@/lib/types/dashboard';

const stats: StatItem[] = [
  { label: 'Doğrulanmış Vaka', value: '5', trend: '+2% son 24 saat' },
  { label: 'Şüpheli Vaka', value: '8' },
  { label: 'Ölüm', value: '3' },
  { label: 'Pandemi Riski', value: 'Düşük' },
];

const news: NewsItem[] = [
  { title: 'DSÖ Hantavirüs Vakalarını İzliyor', source: 'WHO', time: '2 saat önce' },
  { title: 'Cruise Gemisindeki Vakalar Gündemde', source: 'Reuters', time: '4 saat önce' },
  { title: 'Türkiye Sağlık Bakanlığından Açıklama', source: 'TR Sağlık', time: '6 saat önce' },
];

const products: ProductItem[] = [
  { title: 'N95 Koruyucu Maske', category: 'Koruma', cta: 'İncele' },
  { title: 'Profesyonel Dezenfektan', category: 'Hijyen', cta: 'İncele' },
  { title: 'Kamp İlk Yardım Kiti', category: 'Outdoor', cta: 'İncele' },
  { title: 'HEPA Filtreli Temizlik Seti', category: 'Temizlik', cta: 'İncele' },
];

export default function Page() {
  const { data, loading, error } = useRealtimeDashboard(12000);
  const countries = data?.countries ?? [];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8">
      <Hero />
      <Stats items={stats} />

      {loading ? <p className="mb-6 text-sm text-[var(--muted)]">Canlı veriler yükleniyor...</p> : null}
      {error ? <p className="mb-6 rounded-lg border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">{error}</p> : null}

      {countries.length > 0 ? (
        <>
          <LiveWorldMap countries={countries} />
          <CaseCharts trend={data?.trend ?? []} countries={countries} />
          <CountriesTable countries={countries} />
        </>
      ) : null}

      <section className="grid gap-6 lg:grid-cols-2">
        <NewsPanel items={news} />
        <ProductsPanel items={products} />
      </section>
    </main>
  );
}

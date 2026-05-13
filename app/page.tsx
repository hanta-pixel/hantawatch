'use client';

import { AiRiskAnalyzer } from '@/components/dashboard/ai-risk-analyzer';
import { CaseCharts } from '@/components/dashboard/case-charts';
import { CountriesTable } from '@/components/dashboard/countries-table';
import { Hero } from '@/components/dashboard/hero';
import { LiveWorldMap } from '@/components/dashboard/live-world-map';
import { NewsPanel } from '@/components/dashboard/news-panel';
import { PremiumNavbar } from '@/components/dashboard/premium-navbar';
import { ProductsPanel } from '@/components/dashboard/products-panel';
import { Stats } from '@/components/dashboard/stats';
import { useRealtimeDashboard } from '@/hooks/use-realtime-dashboard';
import type { NewsItem, ProductItem, StatItem } from '@/lib/types/dashboard';

const stats: StatItem[] = [
  { label: 'Doğrulanmış Vaka', value: '5', trend: '+2% son 24 saat' },
  { label: 'Şüpheli Vaka', value: '8', trend: '+1 artış' },
  { label: 'Ölüm', value: '3', trend: 'stabil' },
  { label: 'Pandemi Riski', value: '1', trend: 'düşük' },
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
  const { data, loading, error, live } = useRealtimeDashboard(9000);
  const countries = data?.countries ?? [];

  return (
    <main className="mx-auto w-full max-w-7xl overflow-x-hidden px-4 py-6 md:px-6 md:py-8">
      <PremiumNavbar lastUpdated={data ? new Date(data.updatedAt).toLocaleTimeString('tr-TR') : undefined} />
      <Hero />
      <Stats items={stats} />
      <div className="mb-6 flex items-center gap-2 text-xs text-zinc-400"><span className={`h-2 w-2 rounded-full ${live ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`} />Realtime status: {live ? 'Canlı' : 'Senkronize ediliyor'}</div>
      {loading ? <div className="mb-6 h-14 animate-pulse rounded-xl border border-red-500/20 bg-red-500/10" /> : null}
      {error ? <p className="mb-6 rounded-lg border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">{error}</p> : null}
      {countries.length > 0 ? <><LiveWorldMap countries={countries} /><CaseCharts trend={data?.trend ?? []} countries={countries} /><CountriesTable countries={countries} /></> : null}
      <AiRiskAnalyzer />
      <section className="grid gap-6 lg:grid-cols-2"><NewsPanel items={news} /><ProductsPanel items={products} /></section>
    </main>
  );
}

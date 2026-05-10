import { CountriesTable } from '@/components/dashboard/countries-table';
import { Hero } from '@/components/dashboard/hero';
import { NewsPanel } from '@/components/dashboard/news-panel';
import { ProductsPanel } from '@/components/dashboard/products-panel';
import { Stats } from '@/components/dashboard/stats';
import type { CountryItem, NewsItem, ProductItem, StatItem } from '@/lib/types/dashboard';

const stats: StatItem[] = [
  { label: 'Doğrulanmış Vaka', value: '5', trend: '+2% son 24 saat' },
  { label: 'Şüpheli Vaka', value: '8' },
  { label: 'Ölüm', value: '3' },
  { label: 'Pandemi Riski', value: 'Düşük' },
];

const countries: CountryItem[] = [
  { country: 'Arjantin', cases: 3, deaths: 2, status: 'İzleniyor' },
  { country: 'Şili', cases: 2, deaths: 1, status: 'Kontrol Altında' },
  { country: 'Türkiye', cases: 0, deaths: 0, status: 'Resmi Vaka Yok' },
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
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8">
      <Hero />
      <Stats items={stats} />
      <CountriesTable countries={countries} />

      <section className="grid gap-6 lg:grid-cols-2">
        <NewsPanel items={news} />
        <ProductsPanel items={products} />
      </section>
    </main>
  );
}

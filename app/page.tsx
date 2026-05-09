type StatItem = { label: string; value: string };
type CountryItem = { country: string; cases: number; deaths: number; status: string };
type NewsItem = { title: string; source: string; time: string };
type ProductItem = { title: string; category: string };
type FAQItem = { q: string; a: string };

type InfoCard = { title: string; description: string };

const stats: StatItem[] = [
  { label: 'Doğrulanmış Vaka', value: '5' },
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
  { title: 'N95 Koruyucu Maske', category: 'Koruma' },
  { title: 'Profesyonel Dezenfektan', category: 'Hijyen' },
  { title: 'Kamp İlk Yardım Kiti', category: 'Outdoor' },
  { title: 'HEPA Filtreli Temizlik Seti', category: 'Temizlik' },
];

const integrations = [
  'WHO API Entegrasyonu',
  'Google Trends Takibi',
  'AI Haber Üretimi',
  'Push Notification Sistemi',
  'Supabase Auth & Database',
  'Çok Dilli Çeviri Sistemi',
  'Adsense Yerleşimleri',
  'Otomatik Sosyal Medya Paylaşımı',
];

const adminStats: StatItem[] = [
  { label: 'Aktif Kullanıcı', value: '12.4K' },
  { label: 'Gönderilen Bildirim', value: '84K' },
  { label: 'SEO İçeriği', value: '1.2K' },
  { label: 'Affiliate Tıklama', value: '42K' },
];

const faq: FAQItem[] = [
  { q: 'Hantavirüs insandan insana bulaşır mı?', a: 'Çoğu türü kolay şekilde insandan insana bulaşmaz.' },
  { q: 'Ölüm oranı yüksek mi?', a: 'Bazı türlerde ölüm oranı yüksektir ancak yayılım düşüktür.' },
  { q: 'Türkiye’de vaka var mı?', a: 'Şu an resmi açıklamalara göre doğrulanmış yaygın vaka bulunmuyor.' },
];

const symptoms = [
  'Yüksek ateş',
  'Şiddetli kas ağrıları',
  'Halsizlik ve yorgunluk',
  'Solunum problemleri',
  'Baş ağrısı ve mide bulantısı',
];

const preventionTips = [
  'Kapalı alanları havalandır',
  'Fare ve kemirgen temasından kaçın',
  'Eldiven ve maske kullan',
  'Toz kaldırmadan temizlik yap',
  'Gıda depolarını temiz tut',
];

const seoCards: InfoCard[] = [
  { title: 'Hantavirüs Nedir?', description: 'SEO odaklı açıklayıcı rehber içerik.' },
  { title: 'Hantavirüs Belirtileri', description: 'Viral yayılım potansiyelli sağlık içeriği.' },
  { title: 'Fareden Virüs Bulaşır mı?', description: 'Google Discover uyumlu haber/blog yapısı.' },
];

const architectureCards: InfoCard[] = [
  { title: 'Frontend', description: 'Next.js App Router + Tailwind + SEO optimizasyonu.' },
  { title: 'Backend', description: 'Supabase PostgreSQL + Auth + Edge Functions.' },
  { title: 'AI Engine', description: 'Otomatik sağlık haberi üretimi ve içerik optimizasyonu.' },
  { title: 'Monetization', description: 'Adsense + affiliate + e-posta funnel sistemi.' },
];

const languageCards: InfoCard[] = [
  { title: 'AI Çeviri', description: 'Haber ve blog içerikleri otomatik çevrilir.' },
  { title: 'Global SEO', description: 'Çok dilli indeksleme ve hreflang desteği.' },
  { title: 'Trend Radar', description: 'Bölgesel Google Trends analizleri.' },
];

export default function HantavirusTracker() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl">HantaWatch</h1>
            <p className="text-sm text-zinc-400">Canlı Hantavirüs Takip Platformu</p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button className="rounded-2xl bg-red-600 px-5 py-2 font-semibold transition hover:bg-red-500">Bildirimleri Aç</button>
            <button className="rounded-2xl bg-zinc-800 px-5 py-2 font-semibold transition hover:bg-zinc-700">Risk Hesapla</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <section className="mb-10">
          <div className="rounded-[32px] border border-red-500/20 bg-gradient-to-br from-red-700 to-red-900 p-6 shadow-2xl sm:p-10">
            <div className="max-w-3xl">
              <h2 className="mb-5 text-3xl font-black leading-tight sm:text-6xl">Dünya Genelinde Canlı Hantavirüs Takibi</h2>
              <p className="mb-8 text-base leading-relaxed text-red-100 sm:text-xl">Güncel vaka sayıları, dünya haritası, belirtiler, korunma yöntemleri, risk hesaplama araçları ve gerçek zamanlı sağlık haberleri.</p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-2xl bg-white px-6 py-3 font-bold text-black">Canlı Haritayı Aç</button>
                <button className="rounded-2xl border border-white/20 bg-black/30 px-6 py-3 font-bold">Günlük Bildirim Al</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="mb-2 text-sm text-zinc-400">{item.label}</div>
              <div className="text-4xl font-black sm:text-5xl">{item.value}</div>
            </div>
          ))}
        </section>

        <section className="mb-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 lg:col-span-2">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-2xl font-bold">Canlı Dünya Haritası</h2>
              <span className="text-sm text-zinc-400">Gerçek Zamanlı Takip</span>
            </div>
            <div className="flex h-[300px] items-center justify-center rounded-3xl border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 text-center text-base text-zinc-400 sm:h-[450px] sm:text-xl">Leaflet / Google Maps API Entegrasyonu</div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-4 text-2xl font-bold">Risk Hesaplama</h2>
              <div className="space-y-3">
                <input placeholder="Son 14 günde kırsal alanda bulundunuz mu?" className="w-full rounded-2xl border border-zinc-700 bg-zinc-800 px-4 py-3" />
                <input placeholder="Kemirgen teması oldu mu?" className="w-full rounded-2xl border border-zinc-700 bg-zinc-800 px-4 py-3" />
                <button className="w-full rounded-2xl bg-red-600 py-3 font-bold transition hover:bg-red-500">Riski Hesapla</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">Ülkelere Göre Vaka Takibi</h2>
            <input placeholder="Ülke ara..." className="w-full rounded-2xl border border-zinc-700 bg-zinc-800 px-4 py-2 sm:w-auto" />
          </div>

          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-4">Ülke</th><th className="pb-4">Vaka</th><th className="pb-4">Ölüm</th><th className="pb-4">Durum</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((item) => (
                <tr key={item.country} className="border-b border-zinc-800">
                  <td className="py-5 font-semibold">{item.country}</td><td>{item.cases}</td><td>{item.deaths}</td>
                  <td><span className="rounded-full bg-red-600/20 px-3 py-1 text-sm text-red-400">{item.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"><h2 className="mb-5 text-2xl font-bold">Son Haberler</h2><div className="space-y-4">{news.map((item) => <div key={item.title} className="cursor-pointer rounded-2xl bg-zinc-800 p-4 transition hover:bg-zinc-700"><div className="mb-2 font-semibold">{item.title}</div><div className="text-sm text-zinc-400">{item.source} • {item.time}</div></div>)}</div></div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"><h2 className="mb-5 text-2xl font-bold">Affiliate Ürünler</h2><div className="grid gap-4 sm:grid-cols-2">{products.map((item) => <div key={item.title} className="rounded-2xl border border-zinc-700 bg-zinc-800 p-4"><div className="mb-2 text-sm text-zinc-400">{item.category}</div><div className="mb-4 font-bold">{item.title}</div><button className="w-full rounded-xl bg-red-600 py-2 font-semibold transition hover:bg-red-500">İncele</button></div>)}</div></div>
        </section>

        <section className="mb-10 grid gap-6 md:grid-cols-2">
          {[{ title: 'Belirtiler', items: symptoms }, { title: 'Korunma Yolları', items: preventionTips }].map((group) => (
            <div key={group.title} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-4 text-2xl font-bold">{group.title}</h2>
              <div className="space-y-4 leading-relaxed text-zinc-300">{group.items.map((item) => <p key={item}>• {item}</p>)}</div>
            </div>
          ))}
        </section>

        <section className="mb-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4"><h2 className="text-2xl font-bold">SEO İçerik Merkezi</h2><button className="w-full rounded-2xl bg-red-600 px-5 py-2 font-semibold transition hover:bg-red-500 sm:w-auto">Blog Yazısı Oluştur</button></div>
          <div className="grid gap-4 md:grid-cols-3">{seoCards.map((card) => <div key={card.title} className="rounded-2xl bg-zinc-800 p-5"><div className="mb-3 font-bold">{card.title}</div><p className="text-sm text-zinc-400">{card.description}</p></div>)}</div>
        </section>
      </main>
    </div>
  );
}

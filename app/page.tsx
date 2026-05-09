export default function HantavirusTracker() {
  const stats = [
    { label: 'Doğrulanmış Vaka', value: '5' },
    { label: 'Şüpheli Vaka', value: '8' },
    { label: 'Ölüm', value: '3' },
    { label: 'Pandemi Riski', value: 'Düşük' },
  ];

  const countries = [
    {
      country: 'Arjantin',
      cases: 3,
      deaths: 2,
      status: 'İzleniyor',
    },
    {
      country: 'Şili',
      cases: 2,
      deaths: 1,
      status: 'Kontrol Altında',
    },
    {
      country: 'Türkiye',
      cases: 0,
      deaths: 0,
      status: 'Resmi Vaka Yok',
    },
  ];

  const news = [
    {
      title: 'DSÖ Hantavirüs Vakalarını İzliyor',
      source: 'WHO',
      time: '2 saat önce',
    },
    {
      title: 'Cruise Gemisindeki Vakalar Gündemde',
      source: 'Reuters',
      time: '4 saat önce',
    },
    {
      title: 'Türkiye Sağlık Bakanlığından Açıklama',
      source: 'TR Sağlık',
      time: '6 saat önce',
    },
  ];

  const products = [
    {
      title: 'N95 Koruyucu Maske',
      category: 'Koruma',
    },
    {
      title: 'Profesyonel Dezenfektan',
      category: 'Hijyen',
    },
    {
      title: 'Kamp İlk Yardım Kiti',
      category: 'Outdoor',
    },
    {
      title: 'HEPA Filtreli Temizlik Seti',
      category: 'Temizlik',
    },
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

const adminStats = [
  {
    label: 'Aktif Kullanıcı',
    value: '12.4K',
  },
  {
    label: 'Gönderilen Bildirim',
    value: '84K',
  },
  {
    label: 'SEO İçeriği',
    value: '1.2K',
  },
  {
    label: 'Affiliate Tıklama',
    value: '42K',
  },
];

  const faq = [
    {
      q: 'Hantavirüs insandan insana bulaşır mı?',
      a: 'Çoğu türü kolay şekilde insandan insana bulaşmaz.',
    },
    {
      q: 'Ölüm oranı yüksek mi?',
      a: 'Bazı türlerde ölüm oranı yüksektir ancak yayılım düşüktür.',
    },
    {
      q: 'Türkiye’de vaka var mı?',
      a: 'Şu an resmi açıklamalara göre doğrulanmış yaygın vaka bulunmuyor.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">HantaWatch</h1>
            <p className="text-zinc-400 text-sm">Canlı Hantavirüs Takip Platformu</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button className="bg-red-600 hover:bg-red-500 transition px-5 py-2 rounded-2xl font-semibold">
              Bildirimleri Aç
            </button>
            <button className="bg-zinc-800 hover:bg-zinc-700 transition px-5 py-2 rounded-2xl font-semibold">
              Risk Hesapla
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <section className="mb-10 px-2 sm:px-0">
          <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-[32px] p-10 shadow-2xl border border-red-500/20">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-6xl font-black leading-tight mb-5">
                Dünya Genelinde Canlı Hantavirüs Takibi
              </h2>

              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Güncel vaka sayıları, dünya haritası, belirtiler, korunma yöntemleri,
                risk hesaplama araçları ve gerçek zamanlı sağlık haberleri.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black font-bold px-6 py-3 rounded-2xl">
                  Canlı Haritayı Aç
                </button>

                <button className="bg-black/30 border border-white/20 font-bold px-6 py-3 rounded-2xl">
                  Günlük Bildirim Al
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >
              <div className="text-zinc-400 text-sm mb-2">{item.label}</div>
              <div className="text-5xl font-black">{item.value}</div>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Canlı Dünya Haritası</h2>
              <span className="text-sm text-zinc-400">Gerçek Zamanlı Takip</span>
            </div>

            <div className="h-[450px] rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700 flex items-center justify-center text-zinc-400 text-xl">
              Leaflet / Google Maps API Entegrasyonu
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-4">Risk Hesaplama</h2>

              <div className="space-y-3">
                <input
                  placeholder="Son 14 günde kırsal alanda bulundunuz mu?"
                  className="w-full bg-zinc-800 border border-zinc-700 px-4 py-3 rounded-2xl"
                />

                <input
                  placeholder="Kemirgen teması oldu mu?"
                  className="w-full bg-zinc-800 border border-zinc-700 px-4 py-3 rounded-2xl"
                />

                <button className="w-full bg-red-600 hover:bg-red-500 transition py-3 rounded-2xl font-bold">
                  Riski Hesapla
                </button>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-4">Belirti Kontrolü</h2>

              <div className="space-y-3 text-zinc-300">
                <label className="flex gap-3">
                  <input type="checkbox" /> Yüksek ateş
                </label>
                <label className="flex gap-3">
                  <input type="checkbox" /> Kas ağrısı
                </label>
                <label className="flex gap-3">
                  <input type="checkbox" /> Halsizlik
                </label>
                <label className="flex gap-3">
                  <input type="checkbox" /> Nefes darlığı
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-10 overflow-x-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Ülkelere Göre Vaka Takibi</h2>

            <input
              placeholder="Ülke ara..."
              className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-2xl"
            />
          </div>

          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-4">Ülke</th>
                <th className="pb-4">Vaka</th>
                <th className="pb-4">Ölüm</th>
                <th className="pb-4">Durum</th>
              </tr>
            </thead>

            <tbody>
              {countries.map((item) => (
                <tr key={item.country} className="border-b border-zinc-800">
                  <td className="py-5 font-semibold">{item.country}</td>
                  <td>{item.cases}</td>
                  <td>{item.deaths}</td>
                  <td>
                    <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-5">Son Haberler</h2>

            <div className="space-y-4">
              {news.map((item) => (
                <div
                  key={item.title}
                  className="bg-zinc-800 rounded-2xl p-4 hover:bg-zinc-700 transition cursor-pointer"
                >
                  <div className="font-semibold mb-2">{item.title}</div>
                  <div className="text-sm text-zinc-400">
                    {item.source} • {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-5">Affiliate Ürünler</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {products.map((item) => (
                <div
                  key={item.title}
                  className="bg-zinc-800 rounded-2xl p-4 border border-zinc-700"
                >
                  <div className="text-sm text-zinc-400 mb-2">{item.category}</div>
                  <div className="font-bold mb-4">{item.title}</div>

                  <button className="w-full bg-red-600 hover:bg-red-500 transition py-2 rounded-xl font-semibold">
                    İncele
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-4">Belirtiler</h2>

            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>• Yüksek ateş</p>
              <p>• Şiddetli kas ağrıları</p>
              <p>• Halsizlik ve yorgunluk</p>
              <p>• Solunum problemleri</p>
              <p>• Baş ağrısı ve mide bulantısı</p>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-4">Korunma Yolları</h2>

            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>• Kapalı alanları havalandır</p>
              <p>• Fare ve kemirgen temasından kaçın</p>
              <p>• Eldiven ve maske kullan</p>
              <p>• Toz kaldırmadan temizlik yap</p>
              <p>• Gıda depolarını temiz tut</p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-10">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h2 className="text-2xl font-bold">SEO İçerik Merkezi</h2>

            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-500 transition px-5 py-2 rounded-2xl font-semibold">
              Blog Yazısı Oluştur
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-zinc-800 rounded-2xl p-5">
              <div className="font-bold mb-3">Hantavirüs Nedir?</div>
              <p className="text-zinc-400 text-sm">
                SEO odaklı açıklayıcı rehber içerik.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5">
              <div className="font-bold mb-3">Hantavirüs Belirtileri</div>
              <p className="text-zinc-400 text-sm">
                Viral yayılım potansiyelli sağlık içeriği.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5">
              <div className="font-bold mb-3">Fareden Virüs Bulaşır mı?</div>
              <p className="text-zinc-400 text-sm">
                Google Discover uyumlu haber/blog yapısı.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-red-700 to-red-900 rounded-[32px] p-5 sm:p-10 border border-red-500/20">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black mb-4">
              Günlük Vaka Bildirimlerine Katıl
            </h2>

            <p className="text-red-100 mb-6 text-lg">
              E-posta listesine katıl, dünya genelindeki son gelişmeleri anında öğren.
            </p>

            <div className="flex flex-wrap gap-4">
              <input
                placeholder="E-posta adresin"
                className="flex-1 min-w-[260px] bg-black/30 border border-white/20 px-5 py-4 rounded-2xl outline-none"
              />

              <button className="bg-white text-black font-bold px-6 py-4 rounded-2xl">
                Katıl
              </button>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 mt-10 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">AI & API Entegrasyonları</h2>
              <span className="text-xs bg-red-600/20 text-red-400 px-3 py-1 rounded-full">
                Enterprise Stack
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {integrations.map((item) => (
                <div
                  key={item}
                  className="bg-zinc-800 border border-zinc-700 rounded-2xl p-4"
                >
                  <div className="font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Admin Paneli</h2>
              <button className="bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-xl text-sm font-semibold">
                Dashboard Aç
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {adminStats.map((item) => (
                <div
                  key={item.label}
                  className="bg-zinc-800 border border-zinc-700 rounded-2xl p-4"
                >
                  <div className="text-zinc-400 text-sm mb-2">{item.label}</div>
                  <div className="text-3xl font-black">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="bg-zinc-800 rounded-2xl p-4 flex items-center justify-between">
                <span>Otomatik AI Haber Üretimi</span>
                <span className="text-green-400">Aktif</span>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-4 flex items-center justify-between">
                <span>Push Notification Sistemi</span>
                <span className="text-green-400">Aktif</span>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-4 flex items-center justify-between">
                <span>Google Trends Radar</span>
                <span className="text-yellow-400">İzleniyor</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-10">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h2 className="text-2xl font-bold">Next.js + Supabase Backend Mimarisi</h2>
            <span className="text-sm text-zinc-400">Production Ready</span>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">
              <div className="font-bold mb-3">Frontend</div>
              <p className="text-zinc-400 text-sm">
                Next.js App Router + Tailwind + SEO optimizasyonu.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">
              <div className="font-bold mb-3">Backend</div>
              <p className="text-zinc-400 text-sm">
                Supabase PostgreSQL + Auth + Edge Functions.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">
              <div className="font-bold mb-3">AI Engine</div>
              <p className="text-zinc-400 text-sm">
                Otomatik sağlık haberi üretimi ve içerik optimizasyonu.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">
              <div className="font-bold mb-3">Monetization</div>
              <p className="text-zinc-400 text-sm">
                Adsense + affiliate + e-posta funnel sistemi.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-10">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h2 className="text-2xl font-bold">Çok Dilli Sistem</h2>

            <div className="flex gap-3 flex-wrap">
              <button className="bg-red-600 px-4 py-2 rounded-xl text-sm font-semibold">
                Türkçe
              </button>
              <button className="bg-zinc-800 px-4 py-2 rounded-xl text-sm font-semibold">
                English
              </button>
              <button className="bg-zinc-800 px-4 py-2 rounded-xl text-sm font-semibold">
                Español
              </button>
              <button className="bg-zinc-800 px-4 py-2 rounded-xl text-sm font-semibold">
                Deutsch
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-zinc-800 rounded-2xl p-5">
              <div className="font-bold mb-2">AI Çeviri</div>
              <p className="text-zinc-400 text-sm">
                Haber ve blog içerikleri otomatik çevrilir.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5">
              <div className="font-bold mb-2">Global SEO</div>
              <p className="text-zinc-400 text-sm">
                Çok dilli indeksleme ve hreflang desteği.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5">
              <div className="font-bold mb-2">Trend Radar</div>
              <p className="text-zinc-400 text-sm">
                Bölgesel Google Trends analizleri.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-10">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h2 className="text-2xl font-bold">Adsense & Affiliate Yerleşimleri</h2>

            <button className="bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold">
              Monetization Panel
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="bg-zinc-800 rounded-2xl border border-dashed border-zinc-600 h-40 flex items-center justify-center text-zinc-500">
              Adsense Banner 728x90
            </div>

            <div className="bg-zinc-800 rounded-2xl border border-dashed border-zinc-600 h-40 flex items-center justify-center text-zinc-500">
              Native Affiliate Block
            </div>

            <div className="bg-zinc-800 rounded-2xl border border-dashed border-zinc-600 h-40 flex items-center justify-center text-zinc-500">
              Sidebar Sponsored Widget
            </div>
          </div>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-6">Sık Sorulan Sorular</h2>

          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="bg-zinc-800 rounded-2xl p-5">
                <div className="font-bold mb-2">{item.q}</div>
                <div className="text-zinc-400">{item.a}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

import type { DashboardPayload } from '@/types/health';

const fallback: DashboardPayload = {
  updatedAt: new Date().toISOString(),
  totals: { confirmed: 12, suspected: 19, deaths: 4 },
  countries: [
    { code: 'ARG', country: 'Arjantin', cases: 5, deaths: 2, symptomsIndex: 5, lat: -34.6, lng: -58.4 },
    { code: 'CHL', country: 'Şili', cases: 4, deaths: 1, symptomsIndex: 4, lat: -33.4, lng: -70.6 },
    { code: 'TUR', country: 'Türkiye', cases: 1, deaths: 0, symptomsIndex: 2, lat: 39.9, lng: 32.8 },
    { code: 'USA', country: 'ABD', cases: 2, deaths: 1, symptomsIndex: 3, lat: 38.9, lng: -77.0 },
  ],
  trend: [
    { day: 'Pzt', cases: 4, deaths: 1 }, { day: 'Sal', cases: 6, deaths: 1 }, { day: 'Çar', cases: 7, deaths: 2 }, { day: 'Per', cases: 9, deaths: 2 }, { day: 'Cum', cases: 12, deaths: 4 },
  ],
  news: [{ title: 'DSÖ vaka kümelerini izliyor', source: 'WHO', time: '15 dk önce' }],
  products: [{ title: 'N95 Koruyucu Maske', category: 'Koruma', cta: 'İncele' }],
};

export async function getCases(): Promise<DashboardPayload> {
  try {
    const res = await fetch('/api/cases', { cache: 'no-store' });
    if (!res.ok) throw new Error('API error');
    return (await res.json()) as DashboardPayload;
  } catch {
    return fallback;
  }
}

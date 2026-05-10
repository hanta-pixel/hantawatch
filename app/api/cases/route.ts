import { NextResponse } from 'next/server';
import type { DashboardPayload } from '@/lib/types/dashboard';

const payload: DashboardPayload = {
  updatedAt: new Date().toISOString(),
  totals: { confirmed: 12, suspected: 19, deaths: 4 },
  countries: [
    { code: 'ARG', country: 'Arjantin', cases: 5, deaths: 2, symptomsIndex: 5 },
    { code: 'CHL', country: 'Şili', cases: 4, deaths: 1, symptomsIndex: 4 },
    { code: 'TUR', country: 'Türkiye', cases: 1, deaths: 0, symptomsIndex: 2 },
    { code: 'USA', country: 'ABD', cases: 2, deaths: 1, symptomsIndex: 3 },
  ],
  trend: [
    { day: 'Pzt', cases: 4 },
    { day: 'Sal', cases: 6 },
    { day: 'Çar', cases: 7 },
    { day: 'Per', cases: 9 },
    { day: 'Cum', cases: 12 },
  ],
  news: [
    { title: 'DSÖ vaka kümelerini izliyor', source: 'WHO', time: '15 dk önce' },
    { title: 'Sınır kontrolleri artırıldı', source: 'Reuters', time: '42 dk önce' },
  ],
  products: [
    { title: 'N95 Koruyucu Maske', category: 'Koruma', cta: 'İncele' },
    { title: 'HEPA Filtre Seti', category: 'Temizlik', cta: 'İncele' },
  ],
};

export async function GET() {
  return NextResponse.json(payload);
}

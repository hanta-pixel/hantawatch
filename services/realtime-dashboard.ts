import type { DashboardRealtimeData } from '@/types/dashboard-realtime';
import { toRiskLevel } from '@/utils/risk';

const seedCountries = [
  { country: 'Arjantin', code: 'AR', lat: -38.42, lng: -63.61, cases: 3, deaths: 2, status: 'İzleniyor' as const },
  { country: 'Şili', code: 'CL', lat: -35.67, lng: -71.54, cases: 2, deaths: 1, status: 'Kontrol Altında' as const },
  { country: 'Türkiye', code: 'TR', lat: 38.96, lng: 35.24, cases: 0, deaths: 0, status: 'Resmi Vaka Yok' as const },
];

const trend = [
  { day: 'Pzt', cases: 2 },
  { day: 'Sal', cases: 3 },
  { day: 'Çar', cases: 4 },
  { day: 'Per', cases: 5 },
  { day: 'Cum', cases: 5 },
  { day: 'Cmt', cases: 6 },
  { day: 'Paz', cases: 5 },
];

export async function fetchRealtimeDashboardData(): Promise<DashboardRealtimeData> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const drift = Math.floor(Math.random() * 2);

  return {
    countries: seedCountries.map((country) => {
      const cases = Math.max(0, country.cases + drift - Math.floor(Math.random() * 2));
      return { ...country, cases, risk: toRiskLevel(cases) };
    }),
    trend: trend.map((point) => ({ ...point, cases: Math.max(0, point.cases + Math.floor(Math.random() * 2) - 1) })),
    updatedAt: new Date().toISOString(),
  };
}

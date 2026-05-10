import { NextResponse } from 'next/server';
import type { DashboardPayload } from '@/types/health';

const fallback: DashboardPayload = {
  updatedAt: new Date().toISOString(),
  totals: { confirmed: 12, suspected: 19, deaths: 4 },
  countries: [
    { code: 'ARG', country: 'Arjantin', cases: 5, deaths: 2, symptomsIndex: 5 },
    { code: 'CHL', country: 'Şili', cases: 4, deaths: 1, symptomsIndex: 4 },
    { code: 'TUR', country: 'Türkiye', cases: 1, deaths: 0, symptomsIndex: 2 },
  ],
  trend: [{ day: 'Pzt', cases: 4, deaths: 1 }, { day: 'Sal', cases: 6, deaths: 1 }, { day: 'Çar', cases: 7, deaths: 2 }, { day: 'Per', cases: 9, deaths: 2 }, { day: 'Cum', cases: 12, deaths: 4 }],
  news: [{ title: 'DSÖ vaka kümelerini izliyor', source: 'WHO', time: '15 dk önce' }],
  products: [{ title: 'N95 Koruyucu Maske', category: 'Koruma', cta: 'İncele' }],
};

export async function GET() {
  try {
    const res = await fetch('https://disease.sh/v3/covid-19/countries?allowNull=true', { next: { revalidate: 600 } });
    if (!res.ok) throw new Error('source error');
    const rows = (await res.json()) as Array<{ country: string; countryInfo?: { iso3?: string }; cases: number; deaths: number }>;
    const countries = rows.slice(0, 8).map((r) => ({ code: r.countryInfo?.iso3 ?? r.country.slice(0, 3).toUpperCase(), country: r.country, cases: Math.max(0, Math.round(r.cases / 1000000)), deaths: Math.max(0, Math.round(r.deaths / 1000000)), symptomsIndex: 3 }));
    const payload: DashboardPayload = { ...fallback, updatedAt: new Date().toISOString(), countries, totals: { confirmed: countries.reduce((a, c) => a + c.cases, 0), suspected: countries.reduce((a, c) => a + c.cases, 0) + 5, deaths: countries.reduce((a, c) => a + c.deaths, 0) } };
    return NextResponse.json(payload);
  } catch {
    return NextResponse.json(fallback);
  }
}

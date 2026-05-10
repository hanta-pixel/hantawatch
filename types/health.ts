export type RiskLevel = 'Düşük' | 'Orta' | 'Yüksek';
export type CountryCase = { code: string; country: string; cases: number; deaths: number; symptomsIndex: number; lat?: number; lng?: number };
export type TrendPoint = { day: string; cases: number; deaths: number };
export type DashboardPayload = { updatedAt: string; totals: { confirmed: number; suspected: number; deaths: number }; countries: CountryCase[]; trend: TrendPoint[]; news: { title: string; source: string; time: string }[]; products: { title: string; category: string; cta: string }[] };

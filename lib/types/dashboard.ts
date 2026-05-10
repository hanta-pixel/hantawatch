export type RiskLevel = 'Düşük' | 'Orta' | 'Yüksek';

export type CountryCase = {
  code: string;
  country: string;
  cases: number;
  deaths: number;
  symptomsIndex: number;
};

export type NewsItem = { title: string; source: string; time: string };
export type ProductItem = { title: string; category: string; cta: string };

export type TrendPoint = { day: string; cases: number };

export type DashboardPayload = {
  updatedAt: string;
  totals: {
    confirmed: number;
    suspected: number;
    deaths: number;
  };
  countries: CountryCase[];
  trend: TrendPoint[];
  news: NewsItem[];
  products: ProductItem[];
};

export type StatItem = { label: string; value: string; trend?: string };

export type RiskResult = {
  score: number;
  level: RiskLevel;
};

export type StatItem = { label: string; value: string; trend?: string };

export type CountryItem = {
  country: string;
  cases: number;
  deaths: number;
  status: 'İzleniyor' | 'Kontrol Altında' | 'Resmi Vaka Yok';
};

export type NewsItem = { title: string; source: string; time: string };

export type ProductItem = { title: string; category: string; cta: string };

export type RiskLevel = 'low' | 'medium' | 'high';

export type CountryRiskPoint = {
  country: string;
  code: string;
  lat: number;
  lng: number;
  cases: number;
  deaths: number;
  status: 'İzleniyor' | 'Kontrol Altında' | 'Resmi Vaka Yok';
  risk: RiskLevel;
};

export type TrendPoint = {
  day: string;
  cases: number;
};

export type DashboardRealtimeData = {
  countries: CountryRiskPoint[];
  trend: TrendPoint[];
  updatedAt: string;
};

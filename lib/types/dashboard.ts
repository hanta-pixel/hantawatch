export * from '@/types/health';
export type NewsItem = { title: string; source: string; time: string };
export type ProductItem = { title: string; category: string; cta: string };
export type StatItem = { label: string; value: string; trend?: string };
export type RiskResult = { score: number; level: 'Düşük' | 'Orta' | 'Yüksek' };

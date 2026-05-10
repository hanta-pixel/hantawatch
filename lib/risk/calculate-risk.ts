import type { RiskLevel, RiskResult } from '@/lib/types/dashboard';

const riskFromScore = (score: number): RiskLevel => {
  if (score >= 70) return 'Yüksek';
  if (score >= 40) return 'Orta';
  return 'Düşük';
};

export function calculateRisk(cases: number, deaths: number, symptomsIndex: number): RiskResult {
  const caseFactor = Math.min(cases * 6, 60);
  const mortalityRate = cases > 0 ? deaths / cases : 0;
  const mortalityFactor = Math.min(mortalityRate * 100, 30);
  const symptomFactor = Math.min(symptomsIndex * 10, 20);
  const score = Math.round(caseFactor + mortalityFactor + symptomFactor);

  return { score, level: riskFromScore(score) };
}

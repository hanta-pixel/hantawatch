import type { RiskLevel } from '@/types/dashboard-realtime';

export function getRiskColor(risk: RiskLevel): string {
  if (risk === 'high') return '#ef4444';
  if (risk === 'medium') return '#f59e0b';
  return '#22c55e';
}

export function toRiskLevel(cases: number): RiskLevel {
  if (cases >= 8) return 'high';
  if (cases >= 4) return 'medium';
  return 'low';
}

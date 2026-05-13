'use client';

import { CaseCharts } from '@/components/dashboard/case-charts';
import { Hero } from '@/components/dashboard/hero';
import { LiveWorldMap } from '@/components/dashboard/live-world-map';
import { PremiumNavbar } from '@/components/dashboard/premium-navbar';
import { Stats } from '@/components/dashboard/stats';
import { useRealtimeDashboard } from '@/hooks/use-realtime-dashboard';
import type { StatItem } from '@/lib/types/dashboard';

export default function Page() {
  const { data, loading, error, live } = useRealtimeDashboard(9000);
  const countries = data?.countries ?? [];

  const confirmed = countries.reduce((sum, country) => sum + country.cases, 0);
  const deaths = countries.reduce((sum, country) => sum + country.deaths, 0);
  const suspected = Math.max(0, Math.round(confirmed * 0.6));
  const pandemicRisk = confirmed >= 8 || deaths >= 3 ? 'YÜKSEK' : confirmed >= 4 ? 'ORTA' : 'DÜŞÜK';

  const stats: StatItem[] = [
    { label: 'Doğrulanmış Vaka', value: String(confirmed), trend: `${live ? 'canlı veri' : 'senkronize'} 24 saat` },
    { label: 'Şüpheli Vaka', value: String(suspected), trend: `+${Math.max(1, Math.floor(suspected / 3))} artış` },
    { label: 'Ölüm', value: String(deaths), trend: deaths > 0 ? 'izleniyor' : 'stabil' },
    { label: 'Pandemi Riski', value: pandemicRisk, trend: pandemicRisk.toLowerCase() },
  ];

  return (
    <main className="mx-auto w-full max-w-[1280px] overflow-x-hidden px-4 py-5 md:px-6 md:py-7">
      <PremiumNavbar lastUpdated={data ? new Date(data.updatedAt).toLocaleTimeString('tr-TR') : undefined} />
      <Hero />
      <Stats items={stats} />
      {loading ? <div className="mb-6 h-14 animate-pulse rounded-xl border border-red-500/20 bg-red-500/10" /> : null}
      {error ? <p className="mb-6 rounded-lg border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">{error}</p> : null}
      {countries.length > 0 ? <><LiveWorldMap countries={countries} live={live} /><CaseCharts trend={data?.trend ?? []} countries={countries} /></> : null}
    </main>
  );
}

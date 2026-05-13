'use client';

import type { StatItem } from '@/lib/types/dashboard';

type StatsProps = { items: StatItem[] };

const iconByLabel: Record<string, string> = {
  'Doğrulanmış Vaka': '◆',
  'Şüpheli Vaka': '◉',
  'Ölüm': '✦',
  'Pandemi Riski': '⬢',
};

const trendTone = (trend?: string) => {
  if (!trend) return 'text-zinc-400';
  const lowered = trend.toLowerCase();
  if (lowered.includes('yüksek')) return 'text-red-400';
  if (lowered.includes('orta')) return 'text-amber-300';
  if (lowered.includes('düşük')) return 'text-emerald-300';
  return 'text-zinc-400';
};

export function Stats({ items }: StatsProps) {
  return <section className="dashboard-enter mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
    {items.map((item) => <article key={item.label} className="premium-hover rounded-xl border border-white/10 bg-[var(--card-bg)] p-4 shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/10 text-xs text-zinc-100">{iconByLabel[item.label] ?? '•'}</div>
        <p className="text-xs tracking-wide text-zinc-300">{item.label}</p>
      </div>
      <p className="mt-2 text-3xl font-black tracking-tight">{item.value}</p>
      {item.trend ? <p className={`mt-1 text-xs font-medium ${trendTone(item.trend)}`}>↗ {item.trend}</p> : null}
    </article>)}
  </section>;
}

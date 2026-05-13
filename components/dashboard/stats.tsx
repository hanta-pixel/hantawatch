'use client';

import type { StatItem } from '@/lib/types/dashboard';

type StatsProps = { items: StatItem[] };

const iconByLabel: Record<string, string> = {
  'Doğrulanmış Vaka': '🫀',
  'Şüpheli Vaka': '🧪',
  'Ölüm': '☠️',
  'Pandemi Riski': '🛡️',
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
  return (
    <section className="dashboard-enter mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.label} className="premium-hover rounded-2xl border border-white/10 bg-[var(--card-bg)] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">{iconByLabel[item.label] ?? '•'}</div>
            <p className="text-sm text-zinc-300">{item.label}</p>
          </div>
          <p className="mt-3 text-4xl font-black tracking-tight">{item.value}</p>
          {item.trend ? <p className={`mt-2 text-xs font-medium ${trendTone(item.trend)}`}>↗ {item.trend}</p> : null}
        </article>
      ))}
    </section>
  );
}

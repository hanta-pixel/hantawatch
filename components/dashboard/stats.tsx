'use client';

import { useEffect, useState } from 'react';
import type { StatItem } from '@/lib/types/dashboard';

type StatsProps = { items: StatItem[] };

function AnimatedNumber({ value }: { value: string }) {
  const target = Number(value);
  const [current, setCurrent] = useState(Number.isFinite(target) ? 0 : value);

  useEffect(() => {
    if (!Number.isFinite(target)) return;
    let raf = 0;
    let start = 0;
    const duration = 900;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      setCurrent(Math.floor(target * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return <>{current}</>;
}

export function Stats({ items }: StatsProps) {
  return (
    <section className="dashboard-enter mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article
          key={item.label}
          className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 backdrop-blur-sm transition hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.30)]"
        >
          <p className="text-sm text-[var(--muted)]">{item.label}</p>
          <p className="mt-1 text-4xl font-black">
            <AnimatedNumber value={item.value} />
          </p>
          {item.trend ? <p className="mt-2 text-xs text-emerald-400">↗ {item.trend}</p> : null}
        </article>
      ))}
    </section>
  );
}

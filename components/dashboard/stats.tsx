import type { StatItem } from '@/lib/types/dashboard';

type StatsProps = { items: StatItem[] };

export function Stats({ items }: StatsProps) {
  return (
    <section className="dashboard-enter mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.label} className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 backdrop-blur-sm">
          <p className="text-sm text-[var(--muted)]">{item.label}</p>
          <p className="mt-1 text-4xl font-black">{item.value}</p>
          {item.trend ? <p className="mt-2 text-xs text-emerald-400">{item.trend}</p> : null}
        </article>
      ))}
    </section>
  );
}

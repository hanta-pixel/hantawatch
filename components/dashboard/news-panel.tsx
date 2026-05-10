import type { NewsItem } from '@/lib/types/dashboard';

type NewsPanelProps = { items: NewsItem[] };

export function NewsPanel({ items }: NewsPanelProps) {
  return (
    <section className="dashboard-enter rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
      <h2 className="mb-4 text-xl font-bold">Son Haberler</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-xl bg-[var(--surface)] p-4 transition hover:-translate-y-0.5">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">{item.source} • {item.time}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

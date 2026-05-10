import type { ProductItem } from '@/lib/types/dashboard';

type ProductsPanelProps = { items: ProductItem[] };

export function ProductsPanel({ items }: ProductsPanelProps) {
  return (
    <section className="dashboard-enter rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
      <h2 className="mb-4 text-xl font-bold">Affiliate Ürünler</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-xl bg-[var(--surface)] p-4">
            <p className="text-sm text-[var(--muted)]">{item.category}</p>
            <h3 className="mb-3 mt-1 font-semibold">{item.title}</h3>
            <button className="w-full rounded-lg bg-red-600 py-2 text-sm font-bold transition hover:bg-red-500">{item.cta}</button>
          </article>
        ))}
      </div>
    </section>
  );
}

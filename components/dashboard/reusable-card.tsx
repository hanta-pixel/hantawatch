import type { ReactNode } from 'react';

type ReusableCardProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function ReusableCard({ title, description, children, className = '' }: ReusableCardProps) {
  return (
    <article className={`rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 shadow-[0_12px_26px_rgba(0,0,0,0.32)] ${className}`}>
      {title ? <h3 className="text-xl font-extrabold tracking-tight">{title}</h3> : null}
      {description ? <p className="mt-1 text-sm text-[var(--muted)]">{description}</p> : null}
      <div className={title || description ? 'mt-3' : ''}>{children}</div>
    </article>
  );
}

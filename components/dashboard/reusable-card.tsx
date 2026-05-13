import type { ReactNode } from 'react';

type ReusableCardProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function ReusableCard({ title, description, children, className = '' }: ReusableCardProps) {
  return (
    <article className={`rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.28)] ${className}`}>
      {title ? <h3 className="text-lg font-bold">{title}</h3> : null}
      {description ? <p className="mt-1 text-sm text-[var(--muted)]">{description}</p> : null}
      <div className={title || description ? 'mt-4' : ''}>{children}</div>
    </article>
  );
}

'use client';

import { ThemeToggle } from './theme-toggle';

type PremiumNavbarProps = { lastUpdated?: string };

export function PremiumNavbar({ lastUpdated }: PremiumNavbarProps) {
  return (
    <header className="dashboard-enter mb-6 rounded-2xl border border-red-500/30 bg-black/60 px-4 py-3 shadow-[0_0_40px_rgba(220,38,38,0.25)] backdrop-blur md:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-red-400/40 bg-red-500/10 px-2 py-1 text-sm font-black tracking-wide text-red-200">HantaWatch</div>
          <span className="rounded-full border border-red-400/35 bg-red-500/15 px-2.5 py-1 text-[10px] font-bold text-red-200">LIVE</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-zinc-300">
          <span>Son güncelleme: {lastUpdated ?? 'Bekleniyor'}</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

'use client';

import { ThemeToggle } from './theme-toggle';

type PremiumNavbarProps = { lastUpdated?: string };

export function PremiumNavbar({ lastUpdated }: PremiumNavbarProps) {
  return (
    <header className="dashboard-enter mb-6 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur md:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-red-600/20 px-2 py-1 text-sm font-black tracking-wide text-red-200">HantaWatch</div>
          <span className="rounded-full bg-red-600/85 px-2.5 py-1 text-[10px] font-bold text-white">LIVE</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-zinc-300">
          <span>Son güncelleme: {lastUpdated ?? 'Bekleniyor'}</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

'use client';

import { ThemeToggle } from './theme-toggle';

type PremiumNavbarProps = { lastUpdated?: string };

export function PremiumNavbar({ lastUpdated }: PremiumNavbarProps) {
  return (
    <header className="dashboard-enter mb-6 rounded-2xl border border-white/10 bg-black/40 px-4 py-2.5 backdrop-blur-xl md:px-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-red-400/30 bg-red-950/40 px-2.5 py-1 text-base font-extrabold tracking-tight text-zinc-100">HantaWatch</div>
          <span className="rounded-full border border-red-300/40 bg-red-600/85 px-2.5 py-0.5 text-[10px] font-bold text-white">LIVE</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-zinc-300">
          <span>Son güncelleme: {lastUpdated ?? 'Bekleniyor'}</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

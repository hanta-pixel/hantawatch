'use client';

import { ThemeToggle } from './theme-toggle';

type PremiumNavbarProps = { lastUpdated?: string };

const navItems = ['Dashboard', 'Harita', 'Trendler', 'Uyarılar', 'API'];

export function PremiumNavbar({ lastUpdated }: PremiumNavbarProps) {
  return (
    <header className="dashboard-enter mb-4 rounded-xl border border-white/10 bg-black/45 px-4 py-2 backdrop-blur-2xl md:px-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="rounded-md border border-red-500/30 bg-red-950/40 px-2 py-1 text-sm font-extrabold tracking-tight text-zinc-100">HantaWatch</div>
          <span className="rounded-full border border-red-300/45 bg-red-600/85 px-2 py-0.5 text-[10px] font-bold text-white">LIVE</span>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => <button key={item} className="rounded-md px-3 py-1 text-xs font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white">{item}</button>)}
          </nav>
        </div>
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <span>Son güncelleme: {lastUpdated ?? 'Bekleniyor'}</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

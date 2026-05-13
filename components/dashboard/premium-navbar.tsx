'use client';

import { ThemeToggle } from './theme-toggle';

type PremiumNavbarProps = { lastUpdated?: string };

const navItems = ['Dashboard', 'Harita', 'Trendler', 'Uyarılar', 'API'];

export function PremiumNavbar({ lastUpdated }: PremiumNavbarProps) {
  return (
    <header className="dashboard-enter mb-6 rounded-2xl border border-white/10 bg-black/45 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-lg shadow-[0_0_28px_rgba(239,68,68,0.26)]">☣</div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-black tracking-tight text-white">HantaWatch</h1>
              <span className="rounded-full border border-red-500/35 bg-red-500/12 px-2.5 py-1 text-[10px] font-black tracking-[0.18em] text-red-300">LIVE</span>
            </div>
            <p className="text-xs text-zinc-500">Health Intelligence Platform</p>
          </div>
        </div>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => (
            <button key={item} className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-zinc-400 transition hover:bg-white/10 hover:text-white">
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-xs text-zinc-500">
          <span className="hidden md:inline">Son güncelleme: {lastUpdated ?? 'Bekleniyor'}</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

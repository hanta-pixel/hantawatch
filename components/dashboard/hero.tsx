import { ThemeToggle } from './theme-toggle';

export function Hero() {
  return (
    <section className="dashboard-enter mb-8 rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-600 to-red-900 p-6 shadow-2xl md:p-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black leading-tight md:text-5xl">HantaWatch Dashboard</h1>
          <p className="mt-3 max-w-2xl text-red-100">Dünya genelindeki hantavirüs verileri, haber akışı ve risk görünümü tek ekranda.</p>
        </div>
        <ThemeToggle />
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="rounded-2xl bg-white px-5 py-3 font-bold text-black transition hover:opacity-90">Canlı Haritayı Aç</button>
        <button className="rounded-2xl border border-white/30 bg-black/20 px-5 py-3 font-bold transition hover:bg-black/30">Günlük Bildirim Al</button>
      </div>
    </section>
  );
}

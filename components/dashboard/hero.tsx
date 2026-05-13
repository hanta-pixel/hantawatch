export function Hero() {
  return (
    <section className="dashboard-enter mb-4 rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(18,23,34,0.92),rgba(7,9,14,0.96))] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.42)] md:p-7">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-black leading-[1.02] tracking-tight md:text-5xl">HantaWatch Intelligence Dashboard</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">Dünya genelindeki hantavirüs verileri, haber akışı, risk kümeleri ve canlı uyarıları tek bir operasyon panelinde toplanır.</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2.5">
        <button className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500">Canlı Haritayı Aç</button>
        <button className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-white/10">Günlük Bildirim Al</button>
      </div>
    </section>
  );
}

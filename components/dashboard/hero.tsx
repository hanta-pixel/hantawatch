export function Hero() {
  return (
    <section className="dashboard-enter mb-6 rounded-3xl border border-white/10 bg-[linear-gradient(150deg,rgba(18,23,34,0.9),rgba(7,9,14,0.95))] p-7 shadow-[0_16px_42px_rgba(0,0,0,0.45)] md:p-9">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">HantaWatch Dashboard</h1>
        <p className="mt-4 text-base text-zinc-300 md:text-lg">Dünya genelindeki hantavirüs verileri, haber akışı ve risk görünümü tek ekranda.</p>
      </div>
      <div className="mt-7 flex flex-wrap gap-3">
        <button className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-500">Canlı Haritayı Aç</button>
        <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-zinc-100 transition hover:bg-white/10">Günlük Bildirim Al</button>
      </div>
    </section>
  );
}

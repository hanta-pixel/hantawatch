'use client';

import { useMemo, useState } from 'react';
import { ReusableCard } from './reusable-card';

export function AiRiskAnalyzer() {
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [travelRisk, setTravelRisk] = useState(0);
  const [exposureRisk, setExposureRisk] = useState(0);

  const score = useMemo(() => symptoms.length * 15 + travelRisk * 10 + exposureRisk * 12, [symptoms, travelRisk, exposureRisk]);
  const risk = score > 65 ? 'Yüksek' : score > 35 ? 'Orta' : 'Düşük';

  const toggle = (name: string) => setSymptoms((prev) => (prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]));

  return (
    <ReusableCard title="AI Risk Analyzer" description="Semptom + maruziyet tabanlı hızlı risk öngörüsü." className="mb-8">
      <div className="grid gap-4 md:grid-cols-3">
        {['Ateş', 'Baş Ağrısı', 'Kas Ağrısı', 'Bulantı'].map((sym) => (
          <button key={sym} onClick={() => toggle(sym)} className={`rounded-xl border px-3 py-2 text-sm ${symptoms.includes(sym) ? 'border-red-500 bg-red-500/10' : 'border-white/10'}`}>
            {sym}
          </button>
        ))}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="text-sm">Seyahat Riski: {travelRisk}
          <input type="range" min={0} max={5} value={travelRisk} onChange={(e) => setTravelRisk(Number(e.target.value))} className="mt-2 w-full" />
        </label>
        <label className="text-sm">Maruziyet Riski: {exposureRisk}
          <input type="range" min={0} max={5} value={exposureRisk} onChange={(e) => setExposureRisk(Number(e.target.value))} className="mt-2 w-full" />
        </label>
      </div>
      <div className="mt-4 rounded-xl border border-red-400/30 bg-black/30 p-4">
        <p className="text-sm">Risk Skoru: <span className="font-black text-red-300">{score}</span></p>
        <p className="mt-1 text-sm">Seviye: {risk}</p>
        <p className="mt-2 text-xs text-zinc-400">Disclaimer: Bu analiz tıbbi tavsiye değildir.</p>
      </div>
    </ReusableCard>
  );
}

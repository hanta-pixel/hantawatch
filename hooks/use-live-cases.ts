'use client';
import { useEffect, useState } from 'react';
import { getCases } from '@/services/api';
import type { DashboardPayload } from '@/types/health';

export function useLiveCases(intervalMs = 15000) {
  const [data, setData] = useState<DashboardPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    const load = async () => {
      try {
        const next = await getCases();
        if (!alive) return;
        setData(next);
        setError(null);
      } catch {
        if (!alive) return;
        setError('Veri alınamadı');
      } finally {
        if (alive) setLoading(false);
      }
    };
    load();
    const id = setInterval(load, intervalMs);
    return () => { alive = false; clearInterval(id); };
  }, [intervalMs]);

  return { data, error, loading };
}

'use client';

import { useEffect, useState } from 'react';
import { fetchRealtimeDashboardData } from '@/services/realtime-dashboard';
import type { DashboardRealtimeData } from '@/types/dashboard-realtime';

export function useRealtimeDashboard(intervalMs = 9000) {
  const [data, setData] = useState<DashboardRealtimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    let active = true;
    const run = async () => {
      try {
        setLive(false);
        const next = await fetchRealtimeDashboardData();
        if (!active) return;
        setData(next);
        setError(null);
        setLive(true);
      } catch {
        if (!active) return;
        setError('Canlı veriler güncellenemedi. Son başarılı veri gösteriliyor.');
      } finally {
        if (active) setLoading(false);
      }
    };
    void run();
    const id = setInterval(() => void run(), intervalMs);
    return () => { active = false; clearInterval(id); };
  }, [intervalMs]);

  return { data, loading, error, live };
}

'use client';

import { useEffect, useState } from 'react';
import { fetchRealtimeDashboardData } from '@/services/realtime-dashboard';
import type { DashboardRealtimeData } from '@/types/dashboard-realtime';

export function useRealtimeDashboard(intervalMs = 10000) {
  const [data, setData] = useState<DashboardRealtimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const run = async () => {
      try {
        const next = await fetchRealtimeDashboardData();
        if (!active) return;
        setData(next);
        setError(null);
      } catch {
        if (!active) return;
        setError('Canlı veriler güncellenemedi.');
      } finally {
        if (active) setLoading(false);
      }
    };

    void run();
    const id = setInterval(() => void run(), intervalMs);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, [intervalMs]);

  return { data, loading, error };
}

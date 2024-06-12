'use client';

import { useEffect, useState } from 'react';

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Falha na requisição');
        }

        const data = await response.json();

        if (isMounted) {
          setState({ data, isLoading: false, error: null });
        }
      } catch (error) {
        if (isMounted) {
          setState({ data: null, isLoading: false, error: error as Error });
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
}

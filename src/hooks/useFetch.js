import { useState, useEffect, useRef } from 'react';

// Simple fetch hook with abort support
export default function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);
    setData(null);

    fetch(url, { signal: controller.signal, ...(options || {}) })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || res.statusText || 'Fetch error');
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err.message || 'Unknown error');
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error, abort: () => abortRef.current && abortRef.current.abort() };
}

import { useState, useEffect } from 'react';

export function useConfig() {
  const [config, setConfig] = useState({
    analytics: {
      enabled: false,
      trackingId: ''
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const response = await fetch('/api/config');
        if (response.ok) {
          const data = await response.json();
          setConfig(data);
        }
      } catch (error) {
        console.warn('Failed to load config:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchConfig();
  }, []);

  return { config, loading };
}

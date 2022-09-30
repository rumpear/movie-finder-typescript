import { useEffect, useState } from 'react';

type TUseFetch = <T>(
  requestFn: () => Promise<T>,
  deps: string[]
) => {
  state: T | null;
  loading: boolean;
  error: string;
};

export const useFetch: TUseFetch = <T>(
  requestFn: () => Promise<T>,
  deps: string[]
) => {
  const [state, setState] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const asyncRequest = async () => {
      setLoading(true);
      try {
        const data = await requestFn();
        setState(data);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    };

    asyncRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return { state, loading, error };
};

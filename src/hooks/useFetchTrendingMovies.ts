import { useEffect, useState } from 'react';
import { ITrendingMoviesDataResults } from '../interfaces';
import { fetchTrendingMovies } from '../services/movieApi';

type TUseFetchTrendingMovies = () => {
  trendingMovies: ITrendingMoviesDataResults[];
  isLoading: boolean;
  error: string | null;
};

export const useFetchTrendingMovies: TUseFetchTrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState<
    ITrendingMoviesDataResults[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchTrendingMovies();
        setTrendingMovies(results);
      } catch (error: any) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    getTrendingMovies();
  }, []);

  return { trendingMovies, isLoading, error };
};

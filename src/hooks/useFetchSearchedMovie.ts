import { useEffect, useState } from 'react';
import { fetchSearchMovie } from '../services';

export interface IMoviesResults {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMoviesPage {
  page: number;
  results: IMoviesResults[];
  total_pages: number;
  total_results: number;
}

type TUseFetchSearchedMovie = (query: string) => {
  movies: IMoviesResults[];
  loading: boolean;
  error: null;
};

export const useFetchSearchedMovie: TUseFetchSearchedMovie = query => {
  const [movies, setMovies] = useState<IMoviesResults[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      setLoading(true);

      try {
        const data = await fetchSearchMovie<IMoviesPage>(query);
        setMovies(data.results);
      } catch (error: any) {
        setError(error.message);
      }

      setLoading(false);
    };

    getData();
  }, [query]);

  return { movies, loading, error };
};

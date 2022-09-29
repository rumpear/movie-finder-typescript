export interface ITrendingMoviesDataResults {
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

export interface ITrendingMoviesData {
  page: number;
  results: ITrendingMoviesDataResults[];
  total_pages: number;
  total_results: number;
}

export type TFetchTrendingMovies = () => Promise<ITrendingMoviesData>;
export type TFetchMovieById = <T>(id: string) => Promise<T>;
export type TFetchCast = <T>(id: string) => Promise<T>;
export type TFetchMovieReviews = <T>(id: string) => Promise<T>;
export type TFetchSearchMovie = <T>(query: string) => Promise<T>;

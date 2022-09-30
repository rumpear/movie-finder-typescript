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

export interface IMovieDetails {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_title: string;
  release_date: string;
  genres: { id: number; name: string }[];
  overview: string;
}

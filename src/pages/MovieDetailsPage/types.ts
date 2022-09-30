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

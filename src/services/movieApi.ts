import axios from "axios";
import { ITrendingMoviesDataResults } from "../interfaces/";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "5e25dc89cc9570e2f881766abec20685",
};

// interface ITrendingMoviesDataResults {
//   adult: boolean;
//   backdrop_path: string;
//   genre_ids: number[];
//   id: number;
//   media_type: string;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   release_date: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// }

interface ITrendingMoviesData {
  page: number;
  results: ITrendingMoviesDataResults[];
  total_pages: number;
  total_results: number;
}

type TFetchTrendingMovies = () => Promise<ITrendingMoviesData>;

export const fetchTrendingMovies: TFetchTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data;
};

export const fetchMovieById = async (id: string) => {
  const response = await axios.get(`/movie/${id}`);
  // console.log(response.data, "fetchMovieById");
  return response.data;
};

export const fetchCast = async (id: string) => {
  const response = await axios.get(`/movie/${id}/credits`);
  // console.log(response.data, "fetchCast");
  return response.data;
};

export const fetchMovieReviews = async (id: string) => {
  const response = await axios.get(`/movie/${id}/reviews`);
  // console.log(response.data, "fetchMovieReviews");
  return response.data;
};

export const fetchSearchMovie = async (query: string) => {
  const response = await axios.get(`/search/movie`, { params: { query } });
  // console.log(response.data, "fetchSearchMovie");
  return response.data;
};

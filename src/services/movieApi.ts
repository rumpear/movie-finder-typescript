import axios from 'axios';
import {
  TFetchCast,
  TFetchMovieById,
  TFetchMovieReviews,
  TFetchSearchMovie,
  TFetchTrendingMovies,
} from './types';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '5e25dc89cc9570e2f881766abec20685',
  },
});

export const fetchTrendingMovies: TFetchTrendingMovies = async () => {
  const response = await instance.get('/trending/movie/day');
  return response.data;
};

export const fetchMovieById: TFetchMovieById = async id => {
  const response = await instance.get(`/movie/${id}`);
  return response.data;
};

export const fetchCast: TFetchCast = async id => {
  const response = await instance.get(`/movie/${id}/credits`);
  return response.data;
};

export const fetchMovieReviews: TFetchMovieReviews = async id => {
  const response = await instance.get(`/movie/${id}/reviews`);
  return response.data;
};

export const fetchSearchMovie: TFetchSearchMovie = async query => {
  const response = await instance.get(`/search/movie`, {
    params: { query },
  });
  return response.data;
};

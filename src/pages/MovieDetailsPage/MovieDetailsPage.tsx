import { Route, Routes, useParams } from 'react-router-dom';
import {
  MovieDetailsInfo,
  Cast,
  Reviews,
  ErrorMessage,
} from '../../components';
import { GoBackButton, Loader } from '../../components/ui';
import { useFetch } from '../../hooks';
import { fetchMovieById } from '../../services/';
import { IMovieDetails } from './types';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const {
    state: movie,
    loading,
    error,
  } = useFetch<IMovieDetails>(
    () => fetchMovieById<IMovieDetails>(movieId!),
    [movieId!]
  );

  return (
    <>
      <GoBackButton />
      {loading && !error ? (
        <Loader />
      ) : (
        movie && <MovieDetailsInfo movie={movie} />
      )}
      {error && <ErrorMessage message={error} />}

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

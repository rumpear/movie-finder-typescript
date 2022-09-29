import { useParams } from 'react-router-dom';
import { ReviewsList, ErrorMessage } from '..';
import { Loader } from '../ui';
import { useFetch } from '../../hooks';
import { fetchMovieReviews } from '../../services';
import { IReviews } from './types';

export const Reviews = () => {
  const { movieId } = useParams();
  const { state, loading, error } = useFetch<IReviews>(
    () => fetchMovieReviews(movieId!),
    [movieId!]
  );
  const reviewsData = state?.results;

  return (
    <>
      {loading && !error ? (
        <Loader />
      ) : (
        reviewsData && <ReviewsList reviews={reviewsData} />
      )}
      {error && <ErrorMessage message={error} />}
    </>
  );
};

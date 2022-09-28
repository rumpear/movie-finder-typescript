import { useParams } from 'react-router-dom';
import { CastList, ErrorMessage } from '..';
import { Loader } from '../ui';
import { fetchCast } from '../../services';
import { useFetch } from '../../hooks/';
import { ICast } from './types';

export const Cast = () => {
  const { movieId } = useParams();
  const { state, loading, error } = useFetch<ICast>(
    () => fetchCast<ICast>(movieId!),
    [movieId!]
  );
  const castData = state?.cast;

  return (
    <>
      {loading && !error ? (
        <Loader />
      ) : (
        castData && <CastList cast={castData} />
      )}
      {error && <ErrorMessage message={error} />}
    </>
  );
};

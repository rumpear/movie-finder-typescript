import { useFetchTrendingMovies } from '../../hooks';
import { ErrorMessage, Gallery } from '../../components';
import { Loader } from '../../components/ui/';
import { Title } from './HomePage.styled';

export const HomePage = () => {
  const { trendingMovies, isLoading, error } = useFetchTrendingMovies();

  return (
    <>
      <Title>Trending movies</Title>
      {isLoading && !error ? (
        <Loader />
      ) : (
        trendingMovies && <Gallery movies={trendingMovies} />
      )}
      {error && <ErrorMessage message={error} />}
    </>
  );
};

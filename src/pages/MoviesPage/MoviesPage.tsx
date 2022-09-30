import { useSearchParams } from 'react-router-dom';
import { SearchForm, Gallery, ErrorMessage } from '../../components';
import { Loader } from '../../components/ui';
import { useFetchSearchedMovie } from '../../hooks';

export const MoviesPage = () => {
  const [search, setSearch] = useSearchParams();
  const query = search.get('query');
  const { movies, loading, error } = useFetchSearchedMovie(query!);

  return (
    <>
      <SearchForm onSearch={setSearch} query={query} />
      {loading && !error ? (
        <Loader />
      ) : (
        movies && <Gallery movies={movies} />
      )}
      {error && <ErrorMessage message={error} />}
    </>
  );
};

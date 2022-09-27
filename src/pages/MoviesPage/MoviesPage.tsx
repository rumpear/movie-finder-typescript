import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from "../../services/movieApi";
import { SearchForm, Gallery, ErrorMessage } from "../../components";
import { Loader } from "../../components/ui";

export const MoviesPage = () => {
  const [search, setSearch] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const query = search.get("query");

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      setLoading(true);

      try {
        const { results } = await fetchSearchMovie(query);
        setMovies(results);
      } catch (error: any) {
        setError(error.message);
      }

      setLoading(false);
    };

    getData();
  }, [query, search]);

  return (
    <>
      <SearchForm onSearch={setSearch} query={query} />
      {loading && !error ? <Loader /> : movies && <Gallery movies={movies} />}
      {error && <ErrorMessage message={error} />}
    </>
  );
};

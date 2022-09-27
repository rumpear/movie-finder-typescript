import { Route, Routes, useParams } from "react-router-dom";
import {
  MovieDetailsInfo,
  Cast,
  Reviews,
  ErrorMessage,
} from "../../components";
import { GoBackButton, Loader } from "../../components/ui";
import { useFetch } from "../../hooks";
import { IMovieDetails } from "../../interfaces";
import { fetchMovieById } from "../../services/movieApi";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const movieUrl = `/movie/${movieId}` ?? "";

  // if (!movieId) {
  //   return;
  // }

  const { state: movie, loading, error } = useFetch<IMovieDetails>(movieUrl);

  // console.log(movie, "---movie");
  // console.log(movieId, "---movieId");

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

import { useParams } from "react-router-dom";
import { ReviewsList, ErrorMessage } from "..";
import { Loader } from "../ui";
import { useFetch } from "../../hooks";
import { fetchMovieReviews } from "../../services";

interface IReviews {
  results: {
    author: string;
    author_details: {
      name: string;
      username: string;
      avatar_path: string;
      rating: number;
    };
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  }[];
}

export const Reviews = () => {
  const { movieId } = useParams();
  const reviewsUrl = movieId ? `/movie/${movieId}/reviews` : "";
  const { state, loading, error } = useFetch<IReviews>(reviewsUrl);
  const reviewsData = state?.results;
  // console.log(reviewsDat    a, "--data Reviews");

  // const [data, loading, error] = useFetch(
  //   () => fetchMovieReviews(movieId),
  //   [movieId]
  // );

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

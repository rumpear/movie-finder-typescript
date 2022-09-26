import { useParams } from "react-router-dom";
import { CastList, ErrorMessage } from "..";
import { Loader } from "../ui";
import { fetchCast } from "../../services";
import { useFetch } from "../../hooks";

interface TCast {
  cast: {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string;
  }[];
}

export const Cast = () => {
  const { movieId } = useParams();
  // const [data, loading, error] = useFetch(() => fetchCast(movieId), [movieId]);
  const castUrl = movieId ? `/movie/${movieId}/credits` : "";
  const { state, loading, error } = useFetch<TCast>(castUrl);
  console.log(state, "state===state");
  // console.log(data?.cast, "Cast");
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

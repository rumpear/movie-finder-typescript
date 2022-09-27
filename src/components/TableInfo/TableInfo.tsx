import { IMovieDetails } from "../../interfaces";
import { getGenres } from "../../utils";
import { Table, Head, Data, Rating, RatingAccent } from "./TableInfo.styled";

interface IProps {
  movie: IMovieDetails;
}

const TableInfo = ({ movie }: IProps) => {
  const {
    vote_average,
    vote_count,
    popularity,
    original_title,
    release_date,
    genres,
  } = movie;

  const genresShown = genres ? getGenres(genres) : "No genres";
  return (
    <Table>
      <tbody>
        <tr>
          <Head>Vote / Votes:</Head>
          <Data>
            <Rating>{vote_average}</Rating> /{" "}
            <RatingAccent>{vote_count}</RatingAccent>
          </Data>
        </tr>
        <tr>
          <Head>Popularity:</Head>
          <Data>{popularity}</Data>
        </tr>
        <tr>
          <Head>Original title</Head>
          <Data>{original_title}</Data>
        </tr>
        <tr>
          <Head>Release:</Head>
          <Data>{release_date}</Data>
        </tr>
        <tr>
          <Head>Genre:</Head>
          <Data>{genresShown}</Data>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableInfo;

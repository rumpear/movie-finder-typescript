import { Outlet } from "react-router-dom";
import { IMovieDetails } from "../../interfaces";
import { checkPoster } from "../../utils";
import { TableInfo } from "../";
import {
  Wrapper,
  Link,
  Poster,
  PosterThumb,
  Details,
  Title,
  AboutSubtitle,
  AdditionalSubtitle,
  Overview,
} from "./MovieDetailsInfo.styled";

interface IProps {
  movie: IMovieDetails;
}

export const MovieDetailsInfo = ({ movie }: IProps) => {
  // console.log(movie, "MovieDetailsInfo");
  const { poster_path, title, overview } = movie;

  return (
    <>
      <Wrapper>
        <PosterThumb>
          <Poster src={checkPoster(poster_path)} alt={title} />
        </PosterThumb>

        <Details>
          <Title>{title}</Title>
          <TableInfo movie={movie} />
          <AboutSubtitle>About</AboutSubtitle>
          <Overview>{overview}</Overview>
        </Details>
      </Wrapper>

      <AdditionalSubtitle>Additional information</AdditionalSubtitle>
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Review</Link>
      <Outlet />
    </>
  );
};

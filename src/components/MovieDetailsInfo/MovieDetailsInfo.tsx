import { Outlet } from 'react-router-dom';
import { checkPoster } from '../../utils';
import { TableInfo } from '../';
import { IProps } from './types';
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
} from './MovieDetailsInfo.styled';

export const MovieDetailsInfo = ({ movie }: IProps) => {
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

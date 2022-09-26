import { Link, useLocation } from "react-router-dom";
import { ITrendingMoviesDataResults } from "../../interfaces";
import { checkPoster } from "../../utils";
import { List } from "./Gallery.styled";

interface IProps {
  movies: ITrendingMoviesDataResults[];
}

export const Gallery = ({ movies }: IProps) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ original_title, id, poster_path, title }) => {
        const path =
          location.pathname === "/movies" ? `${id}` : `/movies/${id}`;

        return (
          <li key={id}>
            <Link to={path} state={{ from: location }}>
              <img src={checkPoster(poster_path)} alt={title} />
              {original_title}
            </Link>
          </li>
        );
      })}
    </List>
  );
};

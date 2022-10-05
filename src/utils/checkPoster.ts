import { IMAGE_PATH_POSTER, NO_IMAGE } from '../constants';

type TCheckPoster = (posterPath: string) => string;

export const checkPoster: TCheckPoster = posterPath => {
  return posterPath ? IMAGE_PATH_POSTER + posterPath : NO_IMAGE;
};

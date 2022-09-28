import { IMAGE_PATH_PROFILE, NO_IMAGE } from "../constants";

type TCheckProfilePhoto = (posterPath: string) => string;

export const checkProfilePhoto: TCheckProfilePhoto = (posterPath) => {
  return posterPath ? IMAGE_PATH_PROFILE + posterPath : NO_IMAGE;
};

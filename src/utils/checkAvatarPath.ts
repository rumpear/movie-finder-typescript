import { IMAGE_PATH_PROFILE, NO_IMAGE } from "../constants";

type TCheckAvatarPath = (avatar: string) => string;

export const checkAvatarPath: TCheckAvatarPath = (avatar) => {
  if (!avatar) return NO_IMAGE;
  if (avatar.includes(`https`)) return avatar.slice(1);
  return IMAGE_PATH_PROFILE + avatar;
};

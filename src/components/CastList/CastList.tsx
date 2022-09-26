import { checkProfilePhoto } from "../../utils";
import { Image, List, Item } from "./CastList.styled";

const CAST_LENGTH = 18;

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

// interface IProps {
//   cast: {
//     adult: boolean;
//     cast_id: number;
//     character: string;
//     credit_id: string;
//     gender: number;
//     id: number;
//     known_for_department: string;
//     name: string;
//     order: number;
//     original_name: string;
//     popularity: number;
//     profile_path: string;
//   };
// }

export const CastList = ({ cast }: TCast) => {
  const slicedCast = cast?.slice(0, CAST_LENGTH);

  return (
    <>
      {cast.length ? (
        <List>
          {slicedCast.map(({ id, name, character, profile_path }) => {
            return (
              <Item key={id}>
                <Image src={checkProfilePhoto(profile_path)} alt={name} />
                <p>{name}</p>
                <p>{character}</p>
              </Item>
            );
          })}
        </List>
      ) : (
        <p>Nothing to show</p>
      )}
    </>
  );
};

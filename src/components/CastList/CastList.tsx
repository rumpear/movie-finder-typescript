import { checkProfilePhoto } from '../../utils';
import { Image, List, Item } from './CastList.styled';
import { IProps } from './types';

const CAST_LENGTH = 18;

export const CastList = ({ cast }: IProps) => {
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

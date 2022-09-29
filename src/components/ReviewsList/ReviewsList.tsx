import { checkAvatarPath } from '../../utils';
import { Image, List, Item, AuthorWrapper } from './ReviewsList.styled';
import { IReviewsList } from './types';

export const ReviewsList = ({ reviews }: IReviewsList) => {
  return (
    <>
      {reviews.length ? (
        <List>
          {reviews.map(
            ({
              author,
              author_details: { avatar_path, username },
              content,
              id,
            }) => {
              return (
                <Item key={id}>
                  <p>{content}</p>
                  <AuthorWrapper>
                    <Image
                      src={checkAvatarPath(avatar_path)}
                      alt={username}
                    />
                    <p>{author}</p>
                  </AuthorWrapper>
                </Item>
              );
            }
          )}
        </List>
      ) : (
        <p>Nothing to show</p>
      )}
    </>
  );
};

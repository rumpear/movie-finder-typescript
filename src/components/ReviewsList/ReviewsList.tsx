import { checkAvatarPath } from "../../utils";
import { Image, List, Item, AuthorWrapper } from "./ReviewsList.styled";

interface IReviews {
  reviews: {
    author: string;
    author_details: {
      name: string;
      username: string;
      avatar_path: string;
      rating: number;
    };
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  }[];
}

export const ReviewsList = ({ reviews }: IReviews) => {
  console.log(reviews, "reviews");
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
                    <Image src={checkAvatarPath(avatar_path)} alt={username} />
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

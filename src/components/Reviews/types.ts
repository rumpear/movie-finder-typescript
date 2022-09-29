export interface IAuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

export interface IReviewsResults {
  author: string;
  author_details: IAuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface IReviews {
  results: IReviewsResults[];
}

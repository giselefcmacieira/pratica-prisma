export type Review = {
  id: number;
  bookId: number;
  review: string;
  grade: number;
};

export type BodyReview = Omit<Review, "id">;
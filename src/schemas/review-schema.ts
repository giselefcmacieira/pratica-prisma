import joi from "joi";


const REQUIRED_REVIEW_LENGTH = 100;

type Review = { bookId: number, grade: number, review: string }
export const reviewSchema = joi.object<Review>({
  bookId: joi.number().required(),
  grade: joi.number().min(0).max(10).required(),
  review: joi.string().min(REQUIRED_REVIEW_LENGTH).required()
});
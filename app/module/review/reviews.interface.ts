import { Model } from "mongoose";

export type IReview = {
    review:string;
    book:string
}
export type ReviewModel = Model<IReview>
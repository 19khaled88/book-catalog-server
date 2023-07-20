import { Model,Types } from "mongoose";

export type IReview = {
    review:string;
    _id?:string;
    book:Types.ObjectId;
}
export type ReviewModel = Model<IReview>
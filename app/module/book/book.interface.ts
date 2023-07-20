import { Model, Types } from "mongoose";

export type IBook = {
    title:string;
    author:string;
    genre:string;
    publication_date:string;
    reviews?:Types.ObjectId;
}
export type BookModel = Model<IBook>
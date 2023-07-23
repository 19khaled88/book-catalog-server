import mongoose, { Schema, model } from "mongoose";
import { ReviewModel, IReview } from "./reviews.interface";

const reviewSchema = new Schema<IReview, ReviewModel>(
	{
		review: {
			type: String,
			required: true,
		},
		book: {
			type: Schema.Types.ObjectId,
			ref: "Book",
			required: true,
		},
		email:{
			type:String,
			required:true,
		}
	},
	{
		timestamps: true,
	}
);

export const Review = model<IReview, ReviewModel>("Review", reviewSchema);

import { Review } from "./reivews.model";

import { IReview } from "./reviews.interface";

const reviewCreateService = async (
	payload: IReview
): Promise<IReview | null> => {
	
	const newReview = await Review.create(payload);

	if (!newReview) {
		throw new Error("Review posting failed");
	}
	return newReview;
};

const reviewShowService = async (): Promise<IReview[] | null> => {
	const reviews = await Review.find().populate("book");
	if (!reviews) {
		throw new Error("Review not found");
	}
	return reviews;
};

export const ReviewService = {
	reviewCreateService,
	reviewShowService,
};

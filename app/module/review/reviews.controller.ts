import { Request, RequestHandler } from "express";
import { IQuery } from "../../../interfaces/common";
import { ReviewService } from "./reviews.service";
import { Book } from "../book/book.model";
import { BookService } from "../book/book.services";
const reviewCreateController: RequestHandler = async (req, res) => {
	try {
		const body = req.body;
		
		const result = await ReviewService.reviewCreateService(body);
		if(result && result._id){
			const resultGenerated = BookService.updateBookReviewService(result?.book.toString(),result?._id.toString())
			if(!resultGenerated){
				throw new Error('review post not successful')
			}
		}
		
		res.status(200).json({
			success: true,
			message: "review posted successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			data: error,
		});
	}
};

const reviewShowController:RequestHandler = async (req,res) => {
	try {
		const result = await ReviewService.reviewShowService();
		res.status(200).json({
			success: true,
			message: "all reviews",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			data: error,
		});
	}
};

export const ReviewController = {
	reviewCreateController,
    reviewShowController
};

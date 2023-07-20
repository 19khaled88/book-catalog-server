import { Request, RequestHandler } from "express";
import { IQuery } from "../../../interfaces/common";
import { ReviewService } from "./reviews.service";
const reviewCreateController: RequestHandler = async (req, res) => {
	try {
		const body = req.body;
		const result = await ReviewService.reviewCreateService(body);
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

const reviewShowController = async (req,res) => {
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

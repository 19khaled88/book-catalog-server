import { Request, RequestHandler } from "express";
import { BookService } from "./book.services";


const bookCreateController:RequestHandler = async (req, res) => {
	try {
		const body = req.body;
		const result = await BookService.bookCreateService(body);
		res.status(200).json({
			success: true,
			message: "New book created successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			data: error,
		});
	}
};

const allBooksController:RequestHandler = async (req, res) => {
	try {
        const query = req?.query
       
		const result = await BookService.allBooksService(query);
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			data: error,
		});
	}
};

const singleBookController:RequestHandler = async (req, res) => {
	try {
		const result = await BookService.singleBookService(req.params.id);
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			data: error,
		});
	}
};

const updateBookController:RequestHandler = async (req, res) => {
	try {
		const result = await BookService.updateBookService(req.params.id, req.body);
		res.status(200).json({
			success: true,
			message: "Updated successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			data: error,
		});
	}
};

const deleteBookController:RequestHandler = async (req, res) => {
	try {
		const result = await BookService.deleteBookService(req.params.id);
		res.status(200).json({
			success: true,
			message: "Deleted successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			data: error,
		});
	}
};

export const BookController = {
	bookCreateController,
	allBooksController,
	singleBookController,
	updateBookController,
	deleteBookController,
};

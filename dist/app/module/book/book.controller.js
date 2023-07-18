"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_services_1 = require("./book.services");
const bookCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = yield book_services_1.BookService.bookCreateService(body);
        res.status(200).json({
            success: true,
            message: "New book created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            data: error,
        });
    }
});
const allBooksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_services_1.BookService.allBooksService(req.query);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            data: error,
        });
    }
});
const singleBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_services_1.BookService.singleBookService(req.params.id);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            data: error,
        });
    }
});
const updateBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_services_1.BookService.updateBookService(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            data: error,
        });
    }
});
const deleteBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_services_1.BookService.deleteBookService(req.params.id);
        res.status(200).json({
            success: true,
            message: "Deleted successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            data: error,
        });
    }
});
exports.BookController = {
    bookCreateController,
    allBooksController,
    singleBookController,
    updateBookController,
    deleteBookController,
};

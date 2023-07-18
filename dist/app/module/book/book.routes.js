"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/create', book_controller_1.BookController.bookCreateController);
router.get('/books', book_controller_1.BookController.allBooksController);
router.get('/book/:id', book_controller_1.BookController.singleBookController);
router.patch('/book/:id', book_controller_1.BookController.updateBookController);
router.delete('/book/:id', book_controller_1.BookController.deleteBookController);
exports.BookRoutes = router;

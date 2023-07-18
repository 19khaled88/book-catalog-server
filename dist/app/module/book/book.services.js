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
exports.BookService = void 0;
const book_model_1 = require("./book.model");
const bookCreateService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield book_model_1.Book.find({ title: payload.title }, { author: payload.author });
    if (isExist.length !== 0) {
        throw new Error("this book exist");
    }
    else {
        const newBook = yield book_model_1.Book.create(payload);
        if (!newBook) {
            throw new Error("Book create failed");
        }
        return newBook;
    }
});
const allBooksService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = payload;
    const fieldsToSearch = ['title', 'author', 'genre', 'publication_date'];
    let valueToMatch;
    // let valueToFilter
    if (payload.query && payload.query !== undefined) {
        valueToMatch = query;
    }
    else {
        valueToMatch = "";
    }
    // if(payload.filter && payload.filter !== undefined){
    //     console.log(typeof (payload.filter))
    //     valueToFilter = payload.filter
    // }else{
    //     valueToFilter = ""
    // }
    const conditions = fieldsToSearch.map(field => ({ [field]: { $regex: valueToMatch } }));
    const books = yield book_model_1.Book.find({ $or: conditions });
    if (!books) {
        throw new Error("No book found");
    }
    return books;
});
const singleBookService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findById(payload);
    if (!book) {
        throw new Error("Id not found");
    }
    return book;
});
const updateBookService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id, payload);
    const isUpdate = yield book_model_1.Book.findByIdAndUpdate(id, payload, { new: true });
    if (!isUpdate) {
        throw new Error("Update not successful");
    }
    return isUpdate;
});
const deleteBookService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const ifDeleted = yield book_model_1.Book.findByIdAndDelete(id, { new: true });
    if (!ifDeleted) {
        throw new Error("This book not deleted");
    }
    return ifDeleted;
});
exports.BookService = {
    bookCreateService,
    allBooksService,
    singleBookService,
    updateBookService,
    deleteBookService,
};

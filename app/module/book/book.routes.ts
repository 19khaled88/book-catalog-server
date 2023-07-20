import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();



router.post("/book/create", BookController.bookCreateController);
router.get("/book/:id", BookController.singleBookController);
router.patch("/book/:id", BookController.updateBookController);
router.delete("/book/:id", BookController.deleteBookController);
router.get("/books", BookController.allBooksController);
export const BookRoutes = router;

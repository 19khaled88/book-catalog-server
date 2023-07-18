import express from 'express'
import { BookController } from './book.controller'

const router = express.Router()


router.post('/create',BookController.bookCreateController)
router.get('/books',BookController.allBooksController)
router.get('/book/:id',BookController.singleBookController)
router.patch('/book/:id',BookController.updateBookController)
router.delete('/book/:id',BookController.deleteBookController)

export const BookRoutes = router
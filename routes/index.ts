import express from 'express'
import { BookRoutes } from '../app/module/book/book.routes'
import { ReviewRoutes } from '../app/module/review/reviews.routes'

const router = express.Router()

router.use(BookRoutes)
router.use(ReviewRoutes)

export default router
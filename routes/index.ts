import express from 'express'
import { BookRoutes } from '../app/module/book/book.routes'

const router = express.Router()

router.use(BookRoutes)

export default router
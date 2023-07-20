import { IQuery, IUpdateResponse } from '../../../interfaces/common'
import { IBook } from './book.interface'
import { Book } from './book.model'

const bookCreateService = async (payload: IBook): Promise<IBook | null> => {
  const isExist = await Book.find(
    { title: payload.title },
    { author: payload.author },
  )

  if (isExist.length !== 0) {
    throw new Error('this book exist')
  } else {
    const newBook = await Book.create(payload)
    if (!newBook) {
      throw new Error('Book create failed')
    }
    return newBook
  }
}

const allBooksService = async (payload: IQuery): Promise<IBook[] | null> => {
  const { query } = payload
  const fieldsToSearch: string[] = [
    'title',
    'author',
    'genre',
    'publication_date',
  ]
  let valueToMatch: string | number | undefined | null

  // let valueToFilter
  if (payload.query && payload.query !== undefined) {
    valueToMatch = query
  } else {
    valueToMatch = ''
  }

  // if(payload.filter && payload.filter !== undefined){
  //     console.log(typeof (payload.filter))
  //     valueToFilter = payload.filter
  // }else{
  //     valueToFilter = ""
  // }

  const conditions = fieldsToSearch.map((field) => ({
    [field]: { $regex: valueToMatch },
  }))

  // const books = await Book.find();
  const books = await Book.find({ $or: conditions }, {_id:0,reviews:0})

  if (!books) {
    throw new Error('No book found')
  }
  return books
}

const singleBookService = async (payload: string): Promise<IBook | null> => {
  const book = await Book.findById(payload).populate('reviews')
  if (!book) {
    throw new Error('Id not found')
  }
  return book
}

const updateBookService = async (
  id: string,
  payload: IUpdateResponse<IBook>,
) => {
  console.log(id, payload)
  const isUpdate = await Book.findByIdAndUpdate(id, payload, { new: true })

  if (!isUpdate) {
    throw new Error('Update not successful')
  }
  return isUpdate
}

const updateBookReviewService = async (bookId: string, refId: string) => {
  const result = await Book.findByIdAndUpdate(bookId, { reviews: refId })
  console.log(result)
}

const deleteBookService = async (id: string) => {
  const ifDeleted = await Book.findByIdAndDelete(id, { new: true })
  if (!ifDeleted) {
    throw new Error('This book not deleted')
  }
  return ifDeleted
}

export const BookService = {
  bookCreateService,
  allBooksService,
  singleBookService,
  updateBookService,
  updateBookReviewService,
  deleteBookService,
}

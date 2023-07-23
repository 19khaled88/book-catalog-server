import { Schema, model } from 'mongoose'
import { BookModel, IBook } from './book.interface'

const bookSchema = new Schema<IBook, BookModel>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },
    publication_date: {
      type: String,
      required: true,
    },
    reviews: [{
      type: Schema.Types.ObjectId,
      ref: 'Review',
    }],
  },
  {
    timestamps: true,
  },
)

export const Book = model<IBook, BookModel>('Book', bookSchema)

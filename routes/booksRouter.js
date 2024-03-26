import { Router } from 'express'

const booksRouter = new Router()
import {
	createBook,
	getAllBooks,
	getByIdBook,
	removeBook,
	updateBook,
	getByTitleBook,
} from '../controllers/books.js'


// создать книгу
booksRouter.post('/create', createBook)

// получить все книги
 booksRouter.get('/all', getAllBooks)

// получить одну книгу по id
booksRouter.get('/:id', getByIdBook)

// получить одну книгу по title
booksRouter.post('/title', getByTitleBook)

// редактировать книгу
booksRouter.put('/:id', updateBook)

// удалить книгу
booksRouter.delete('/:id', removeBook)


export default booksRouter

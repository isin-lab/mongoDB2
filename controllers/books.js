import Book from '../models/Book.js'

// создать книгу
export const createBook = async (req, res) => {
	try {
		const { title, description, authors } = req.body
		
		const newBook = new Book({
			title,
			description,
			authors,
		})

		await newBook.save()	
		return res.json(newBook)

	} catch (error) {
    console.log(error)
		res.json({ message: 'Что-то пошло не так.' })
	}
}

// получить все книги
export const getAllBooks = async (req, res) => {
	try {
		const books = await Book.find().sort('-createdAt')

		if (!books) {
			return res.json({ message: 'Книг нет' })
		}

		res.json({ books })
	} catch (error) {
		res.json({ message: 'Что-то пошло не так.' })
	}
}

// получить одну книгу по id
export const getByIdBook = async (req, res) => {
	try {
		const book = await Book.findByIdAndUpdate(req.params.id)
		res.json(book)
	} catch (error) {
		res.json({ message: 'Что-то пошло не так.' })
	}
}

// получить одну книгу по title
export const getByTitleBook = async (req, res) => {
	try {
    const {title} = req.body
		const book = await Book.findOne({ title })


    if (!book) {
			return res.json({message: "книга не найдена"})
		}
    
		res.json(book)

	} catch (error) {
    console.log(error)
		res.json({ message: 'Что-то пошло не так.' })
	}
}

// удалить книгу
export const removeBook = async (req, res) => {
	try {
		const book = await Book.findByIdAndDelete(req.params.id)
		if (!book) return res.json({ message: 'Книги не существует' })

		res.json({ message: 'Книга удалена.' })
	} catch (error) {
		res.json({ message: 'Что-то пошло не так.' })
	}
}

// редактировать книгу
export const updateBook = async (req, res) => {
	try {
		const { title, description, authors } = req.body
		const book = await Book.findById(req.params.id)

		book.title = title
		book.description = description
    book.authors = authors

		await book.save()

		res.json(book)
	} catch (error) {
    console.log(error)
		res.json({ message: 'Что-то пошло не так.' })
	}
}



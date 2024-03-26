import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import booksRouter from './routes/booksRouter.js';

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/api/book', booksRouter)

const PORT = process.env.PORT || 3001
const DB = process.env.DB

async function start() {
    try {
        await mongoose.connect(DB).then(() => console.log('DB ok'))
        app.listen(PORT, () => console.log(`port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()



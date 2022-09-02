require('dotenv').config()
import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bookRouter from './routes/book';

const app: Express = express();

const { PORT, DB_URL } = process.env

mongoose.connect(DB_URL as string, () => {
    console.log('DB connected...')
})

app.use(cors({
    origin: '*'
}))

app.use(express.json())

app.use('/books', bookRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`)
})
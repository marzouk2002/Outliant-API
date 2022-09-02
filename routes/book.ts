import { Router, Request, Response } from 'express';
import { ERROR } from '../types/types'
import BooksModel  from '../models/books'
import { isAvalideBook } from '../utils/utils';

const router: Router = Router()

router.get('/', async (req: Request, res: Response) => {
    const books = await BooksModel.find({}).sort({ "num_pages": 1 })
    res.status(200).json(books)
})

router.post('/', async (req: Request, res: Response) => {
    try {
        const { book } = req.body
        if(book || !isAvalideBook(book)) throw new Error(ERROR.INVALID_BOOK)

        await BooksModel.create({...book})
        res.status(201).json({
            message: 'Book Added successfully',
            book
        })
    } catch(err: any) {
        switch(err.message) {
            case ERROR.INVALID_BOOK: 
                res.status(400).json({message: ERROR.INVALID_BOOK})
                break;
            default:
                res.status(500).json({message: ERROR.INTERNAL})
        }
    }
})

router.delete('/:isbn', async (req: Request, res: Response) => {
    try {
        const { isbn } = req.params
        if(!isbn) throw new Error(ERROR.ISBN_NOT_FOUND)
        

        const {deletedCount} = await BooksModel.deleteOne({isbn})

        if(deletedCount) {
            res.status(200).json({
                message: `Book with the isbn ${isbn} was deleted successfully`
            })
        } else {
            res.status(200).json({
                message: `Book with the isbn ${isbn} wasn't found`
            })
        }
    }
    catch(err: any) {
        switch(err.message) {
            case ERROR.ISBN_NOT_FOUND: 
                res.status(400).json({message: ERROR.ISBN_NOT_FOUND})
                break;
            default:
                res.status(500).json({message: ERROR.ISBN_NOT_FOUND})
        }
    }
})

export default router;
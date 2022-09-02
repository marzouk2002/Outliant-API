import mongoose, { Schema } from 'mongoose';

const BooksSchema: Schema = new mongoose.Schema({
    title: {
		type: String,
		required: true
	},
    author_name: {
		type: String,
		required: true
	},
    publication_year: {
        type: Number,
		required: true
	},
    isbn: {
        type: String,
        required: true
    },
    num_pages: {
		type: Number,
		required: true
	}
}, {collection:'books'})

const model = mongoose.model('BooksModel', BooksSchema);

export default model;
export interface Book {
    title: string;
    author_name: string;
    publication_year: number;
    isbn: string;
    num_pages: number;
}

export enum ERROR {
    INVALID_BOOK= 'Please provide a valid Book',
    ISBN_NOT_FOUND= 'Please provide a valid isbn',
    INTERNAL= 'Sorry, something bad happened'
}
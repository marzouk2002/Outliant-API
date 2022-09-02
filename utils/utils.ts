import { Book } from "../types/types";

export function isAvalideBook(obj: any): obj is Book {
    return 'title' in obj 
        && 'author_name' in obj 
        && 'publication_year' in obj 
        && 'isbn' in obj 
        && 'num_pages' in obj;
}

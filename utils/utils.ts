import { RawBook } from "../types/types";

export function isAvalideBook(obj: any): obj is RawBook {
    return 'title' in obj 
        && 'author_name' in obj 
        && 'publication_year' in obj 
        && 'num_pages' in obj;
}

export function generateIsbn(): string { // I know this is not the best solution since you might end up with two books with same Isbn, but I believe for this small app we can work with it
    const { round, random, pow } = Math
    return round(random() * pow(10, 10)).toString()
}
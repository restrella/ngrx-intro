import { Book } from '../models/book';

export interface BookState {
  books: ReadonlyArray<Book>;
}

import { createReducer, on } from '@ngrx/store';
import { BookState } from './book-state';
import {
  addBookState,
  deleteBookState,
  setBookList,
  updateBookState,
} from './book.action';

export const initialState: BookState = {
  books: [],
};

export const bookReducer = createReducer(
  initialState,
  on(setBookList, (state, { books }) => {
    return {
      ...state,
      books,
    };
  }),
  on(addBookState, (state, { book }) => {
    return {
      ...state,
      books: [...state.books, book],
    };
  }),
  on(updateBookState, (state, { book }) => {
    return {
      ...state,
      books: state.books.map((oldBook) =>
        oldBook.id === book.id ? book : oldBook
      ),
    };
  }),
  on(deleteBookState, (state, { bookId }) => {
    return {
      ...state,
      books: state.books.filter((oldBook) => oldBook.id !== bookId),
    };
  })
);

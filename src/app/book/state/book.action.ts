import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

export enum BookActions {
  GET_BOOK_LIST = '[Book] Get List of Books',
  SET_BOOK_LIST = '[Book] Set List of Books',
  ADD_BOOK_STATE = '[Book] Add Book',
  ADD_BOOK_API = '[Book] Add Book from API',
  DELETE_BOOK_STATE = '[Book] Delete Book',
  DELETE_BOOK_API = '[Book] Delete Book using API',
  UPDATE_BOOK_STATE = '[Book] Update Book',
}

export const setBookList = createAction(
  BookActions.SET_BOOK_LIST,
  props<{ books: ReadonlyArray<Book> }>()
);

export const getBookList = createAction(BookActions.GET_BOOK_LIST);

export const addBookState = createAction(
  BookActions.ADD_BOOK_STATE,
  props<{ book: Book }>()
);

export const updateBookState = createAction(
  BookActions.UPDATE_BOOK_STATE,
  props<{ book: Book }>()
);

export const deleteBookState = createAction(
  BookActions.DELETE_BOOK_STATE,
  props<{ bookId: number }>()
);

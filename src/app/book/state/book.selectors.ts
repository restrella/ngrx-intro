import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from './book-state';

export const selectBookState = createFeatureSelector<BookState>('bookState');
// {books[], authors[]}

export const selectBooks = () =>
  createSelector(selectBookState, (state: BookState) => state.books);

export const selectBook = (id: number) =>
  createSelector(selectBookState, (state: BookState) =>
    state.books.find((oldBook) => oldBook.id === id)
  );

import { BookService } from './../services/book.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookActions } from './book.action';
import { map, mergeMap } from 'rxjs';
import { Book } from '../models/book';

@Injectable()
export class BookEffects {
  constructor(private action$: Actions, private bookService: BookService) {}

  getBooks$ = createEffect(() => {
    return this.action$.pipe(
      ofType(BookActions.GET_BOOK_LIST),
      mergeMap((data: { payload: string }) =>
        this.bookService
          .getBooks()
          .pipe(map((books) => ({ type: BookActions.SET_BOOK_LIST, books })))
      )
    );
  });

  addBook$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(BookActions.ADD_BOOK_API),
        mergeMap((data: { type: string; payload: Book }) =>
          this.bookService
            .addBook(data.payload)
            .pipe(map((book) => ({ type: BookActions.ADD_BOOK_STATE, book })))
        )
      );
    },
    { dispatch: true }
  );
}

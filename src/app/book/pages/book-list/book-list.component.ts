import { selectBooks } from './../../state/book.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookActions } from '../../state/book.action';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books$ = this.store.select(selectBooks());
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch({ type: BookActions.GET_BOOK_LIST });

    this.books$.subscribe((data) => {
      console.log(data);
    });
  }

  addBook() {
    const book: Book = { title: 'Noli Me Tangere', author: 'Jose Rizal' };
    this.store.dispatch({ type: BookActions.ADD_BOOK_API, payload: book });
  }
}

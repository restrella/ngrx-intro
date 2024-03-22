import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  env = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(`${this.env}/books`);
  }

  addBook(book: Book) {
    return this.http.post(`${this.env}/books`, book);
  }
}

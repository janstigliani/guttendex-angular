import { effect, Injectable, signal } from '@angular/core';
import { Book } from '../../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly BASE_URL = "https://gutendex.com/books/?page=";
  page = signal(1);
  books = signal<Book[]>([]);
  
  constructor() {
    effect(() => {
      this.getBooks(this.page())
    })
  }

  getBooks(page: number){
    const url = this.BASE_URL + page;

    fetch(url)
    .then(resp => resp.json())
    .then(data => this.books.update(previousArray => previousArray.concat(data.results)))
    .catch(err => console.log(err))

  }

}

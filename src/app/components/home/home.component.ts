import { Component } from '@angular/core';
import { BookListComponent } from "../book-list/book-list.component";
import { BookDetailComponent } from "../book-detail/book-detail.component";
import { Book } from '../../model/book';

@Component({
  selector: 'app-home',
  imports: [BookListComponent, BookDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedBook?: Book;

  selectBook(book: Book) {
    this.selectedBook = book;
  }

}

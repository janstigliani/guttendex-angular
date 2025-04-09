import { Component, input } from '@angular/core';
import { Book } from '../../model/book';


@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  book = input<Book>();

}

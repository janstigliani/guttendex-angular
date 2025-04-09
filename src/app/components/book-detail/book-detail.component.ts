import { Component, effect, inject } from '@angular/core';
import { BookService } from '../../services/book/book.service';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  service = inject(BookService);
}

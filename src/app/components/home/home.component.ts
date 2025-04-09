import { Component } from '@angular/core';
import { BookListComponent } from "../book-list/book-list.component";
import { BookDetailComponent } from "../book-detail/book-detail.component";

@Component({
  selector: 'app-home',
  imports: [BookListComponent, BookDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

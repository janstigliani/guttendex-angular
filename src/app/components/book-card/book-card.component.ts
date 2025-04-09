import { Component, inject, input, numberAttribute } from '@angular/core';
import { BookService } from '../../services/book/book.service';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {

  imgUrl = input('', {alias: 'image-url'});
  title = input('', {alias: 'book-title', transform: (actualTitle:string) => this.resizeTitle(actualTitle, 8)});
  id = input(-1, {alias: 'book-id', transform: numberAttribute});
  service = inject(BookService);

  resizeTitle(title:string ,maxWords:number) {
    const wordsArray = title.split(" ");
    const resizedArray = wordsArray.slice(0, maxWords);
    let resizedTitle = resizedArray.join(" ");
    if (wordsArray.length !== resizedArray.length) {
      resizedTitle += "...";
    }
    return resizedTitle;
  }

  selectBook() {
    this.service.selectedBookById(this.id());
    }
}

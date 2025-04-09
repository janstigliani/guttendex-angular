import { Component, input, numberAttribute, output } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {

 book = input<Book>();
 bookSelected = output<Book|undefined>();

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
    this.bookSelected.emit(this.book());
    }
}

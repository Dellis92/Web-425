import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '..book.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books: Observable<IBook{}>;
  header: Array<string> = ['isbn', 'title', 'numOfPage', 'authors', ];
  book: IBook;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  showBookDetails(isbn: string){
    this.book - this.booksService.getBook(isbn_;
      console.log(this.book);
    )
  }
 }

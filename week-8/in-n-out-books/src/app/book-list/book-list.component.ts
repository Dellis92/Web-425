import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '..book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

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

  constructor(private booksService: BooksService, private dialog:MatDialog){
    showBookDetails(isbn: string)
  }

  const dialogRef=this.dialog.open(BookDetailsDialogComponent{
    data {book:thisbook}
  })
  dialogRef.afterClosed().subscribe(result=>{if (result ==='confirm'){this.book=null;}})
 }

 this.booksService.getBooks().subscribe(res => {
  console.log(res);
  for (let key in res) {
    if (res.howOwnProperty(key)) {
      let authors = [];
      if (res[key.details.authors.map(function(author) {
      })

    this.books.push({
      isbn:res[key.details.isbn_14 ? res[key].details.isbn_13 : res[key].details.isbn_10,
      title: res[key].details.title,
      description: res[key].details.subtitle ? res[key].details.subtitle : "N/A",
      numOfPages: res[key].details.number_of_pages,
      authors: authors
  ]
    })])
    }
  }
 })


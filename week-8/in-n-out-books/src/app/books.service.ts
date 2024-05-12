import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientModule, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  isbns: string
  books: Array<IBook>;
  constructor() {
    this.books = [
      {
        isbn: '9780060082079',
        title: Mortal Engines,
        descripton: 'Dystopian future where cities move on wheels across a barren earth'
        numOfPages: 320,
        authors: ['Philip Reeve']
      },
      {
        isbn: '1668037718',
        title: 'You Like it Darker',
        descripton: 'Explores the long hidden secret of how the eponymous gentlemen got their skills.',
        numOfPages: 512,
        authors: ['Stephen King']
      }
      {
        isbn: '0804172706',
        title: 'A Little Life',
        descripton: 'Follows four college classmates - broke, adrift, and buoyed only by their friendship and ambition.',
        numOfPages: 832,
        authors: ['Hanya Yanagihara']
      },
      {
        isbn: '0062060627',
        title: 'The Song of Achilles',
        descripton: 'A tale of gods, kings, immortal fame, and the human heart',
        numOfPages:416,
        authors: ['Madeline Miller']
      },
      {
        isbn: '9780593488946',
        title: 'The Heaven & Earth Grocery Store',
        descripton: 'A murder mystery locked inside a great american novel',
        numOfPages: 400,
        authors: ['James McBride']
      }
    ]
  }
  getBooks(): {
    let params = new HttpParams();
    params = params.append('bibkeys','ISBN${this.isbns.join(','}');
  }


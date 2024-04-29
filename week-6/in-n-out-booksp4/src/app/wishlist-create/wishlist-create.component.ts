import { IWishListItem } from './../wishlist-item.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  standalone: true,
  imports: [],
  templateUrl: './wishlist-create.component.html',
  styleUrl: './wishlist-create.component.css'
})
export class WishlistCreateComponent {

  @Output() addItemEmmiter = new EventEmitter<IWishListItem>();

item: IWishListItem;

  constructor() {
    this.item = {} as IWishListItem;
   }

  ngOnInIt(): void {
  }

  addItem() {
    this.addItemEmmiter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishListItem;
  }
}

import { Component } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishilist',
  standalone: true,
  imports: [],
  templateUrl: './wishilist.component.html',
  styleUrl: './wishilist.component.css'
})
export class WishilistComponent {

  items: Array<IWishListItem> = [];
  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  updateItemsHandler(item: IWishListItem) {
    this.items.push(item);
  }

}

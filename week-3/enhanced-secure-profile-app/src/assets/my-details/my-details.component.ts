import { Component } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "Typescript", "#2024", "#CodingWithAngular", "#ngOmaha"
  ]

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
  }

  toString() {
    console.log('|n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite Color: ${this.favoriteColor}\n`);
  }
}

@Component({
  selector: 'app-my-details',
  standalone: true,
  imports: [],
  templateUrl: './my-details.component.html',
  styleUrl: './my-details.component.css'
})
export class MyDetailsComponent {

  myProfile: Person;
  myName: string;

  constructor() {
    this.myProfile = new Person("DeVonte Rashad Ellis", "Pizza", "Green");
    this.myProfile.toString();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css'
})
export class BaseLayoutComponent {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts'
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {

  isLoggedIn = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {issLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}

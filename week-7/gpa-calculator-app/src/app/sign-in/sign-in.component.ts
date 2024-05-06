import { SignInService } from './../sign-in.service';
import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  signInForm: FormGroup;
  errorMessage: string

  constructor(private routerL Router, private cookieService: CookieService, private fb: FormBuilder, private SignInService: SignInService) { }

  studentId: [",Validators.compose([Validators.required,Validators.pattern(^[0-9]*$)'])"]

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ''
    })
  }

  onSubmit() {
    const formValues = this.signInForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.SignInService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])
    } else {
      this.errorMessage = 'The student ID you have entered is invalid. Please try again.';
    }
  }

  get form() {return this.signInForm.controls;}
}

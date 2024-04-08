import { Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SigninGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    CanActivate: [SigninGuard]
  }
]

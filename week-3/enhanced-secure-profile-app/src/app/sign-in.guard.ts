import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const signInGuard: CanActivateFn = (route, state) => {
  return true;

  isLoggedIn: Boolean;

  constructor(private route: Router) {
    this.isLoggedIn = Boolean(this.next.queryParams.isLoggedIn.get('isLoggedIn'));
   }
};

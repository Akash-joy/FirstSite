import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  authService: any;
  constructor( private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigateByUrl('/app-login');
      return true; // Allow navigation to the login component if the user is not logged in
    } else {
      this.router.navigateByUrl('/app-login'); // Redirect to another component if already logged in
      return false; // Prevent navigation to login component
    }
  }
}




import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLoggedIn: boolean | undefined ; 

  constructor(private router: Router) {}
  
  canActivate(): boolean {
    const storedUsername = localStorage.getItem('username');
    this.isLoggedIn = !!storedUsername; 
    if (this.isLoggedIn) {
      return true;  
    }
    this.router.navigateByUrl('/');
    return false; 
  }

}

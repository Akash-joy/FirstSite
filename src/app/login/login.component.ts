import { Component } from '@angular/core';
import { FormGroup,FormControlName, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
isLoggedIn: boolean=false
constructor(private router:Router){}

loginForm=new FormGroup({
  Username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
})

save(){
 const username= this.loginForm.value.Username
const password=this.loginForm.value.password
  this.router.navigate(['/']);
  if (username !== null && username !== undefined && password !== null && password !== undefined) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }
}
ngOnInit() {
  const storedUsername = localStorage.getItem('username');
  this.isLoggedIn =!!storedUsername;
  
}
logout(){
  localStorage.removeItem('username');
  this.isLoggedIn = false;
}
}
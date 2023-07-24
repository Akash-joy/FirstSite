import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ForcheckboxService } from '../forcheckbox.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.scss']

})
export class DropdownlistComponent implements OnInit{
 
  showDiv: boolean = true;
  private subscription: Subscription;
  isLoggedIn: boolean = false;
  
  constructor(private checkboxService:ForcheckboxService,private router:Router ) { 
    this.subscription = this.checkboxService.checkboxState1.subscribe((state) => {
      this.showDiv = state;
    });
  }
 

  ngOnInit() {
    const storedUsername = localStorage.getItem('username');
    this.isLoggedIn =!!storedUsername;
  
  }
  auth(){ 
    if (this.isLoggedIn) {
      this.router.navigateByUrl('/app-chapter-two');
    } else {   
      this.router.navigateByUrl('/app-login');
    }
      
  } 
}
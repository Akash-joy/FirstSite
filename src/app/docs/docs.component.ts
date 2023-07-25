
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DOCSComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.navigateByUrl('/app-chapter-one');
  }
  
  

  

 
  
}

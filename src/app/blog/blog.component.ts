
interface ApiResponse {
  title: string;
  userId:number;
  id:number;
  body:string;
}
import { Component, OnInit} from '@angular/core';
import { ApiCallService } from '../api-call.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BLOGComponent implements OnInit {

  apiarray:ApiResponse[] = [];

constructor(private apiservice:ApiCallService){}
ngOnInit() {
  this.apiservice.getpost().subscribe((res)=>{
  this.apiarray=res})
   
}

}
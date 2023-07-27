import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private apicall:HttpClient) { }
  getpost(){
    return this.apicall.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}

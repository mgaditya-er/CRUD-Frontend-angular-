import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:8001/"
  constructor(private http:HttpClient) { 
    console.log('Service is working');
  }

  getUserList(){
    return this.http.get(`${this.url}`)
  }

  createUser(data:any){
    return this.http.post(`${this.url}`,data)
  }



   
}

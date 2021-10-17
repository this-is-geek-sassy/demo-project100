import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // injecting a service within a service 
  constructor(private http:HttpClient) { }

  getUsers(): Observable<any> {
    // ajax call to fetch the list of users
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

}

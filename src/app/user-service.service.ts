import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // injecting a service within a service 
  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> {
    // ajax call to fetch the list of users
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

  getUser(id:number): Observable<any> {
    return this.http.get<any>('http://jsonplaceholder.typicode.com/users/'+id);
  }

  addUser(userObj:any): Observable<any> {
    return this.http.post('http://jsonplaceholder.typicode.com/users/', userObj);
  }

}

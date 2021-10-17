import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  subject = new Subject<string>();   // step 1: define the subject

  constructor() { }
  setUsername(username:string) {  //called by login Comp 
    // add it to the subject -- stream of values 
    this.subject.next(username);  
  }
  getUsername():Observable<string> {   // called by header comp
    return this.subject.asObservable();
  }
}

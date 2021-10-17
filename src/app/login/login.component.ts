import { Component, Inject, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "guest";
  password: string = "guest";

  constructor(private auth:AuthserviceService) { }

  ngOnInit(): void {
  }

  authenticate() {  // functions/controllers

  }
  login() {
    // check for authentication 
    this.auth.setUsername(this.username);
  }

}

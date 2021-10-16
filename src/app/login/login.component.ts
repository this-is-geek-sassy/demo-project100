import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "guest";
  password: string = "guest";

  constructor() { }

  ngOnInit(): void {
  }

  authenticate() {  // functions/controllers

  }

}

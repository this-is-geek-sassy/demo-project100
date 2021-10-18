import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  signupForm!: FormGroup;
  // email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { 
    this.signupForm = new FormGroup({
      email:  new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
  }
  
  get password() {
    return this.signupForm.get('password');
  }

  get email() {
    return this.signupForm.get('email');
  }
}

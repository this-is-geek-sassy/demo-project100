import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userList!:Array<User>;

  constructor(private userservice:UserServiceService) { 

  }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(users=>{
      this.userList = users;
    }, error => console.log(error))
  }

  addUser() {
    this.userservice.addUser({name:'Amit', email:'amit44@gmail.com'}).subscribe(response => {
      // display some acknowledgement to the end user
      
    });
  }

}

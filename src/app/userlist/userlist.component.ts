import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userList!:Array<any>;

  constructor(private userservice:UserServiceService) { 

  }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(users=>{
      this.userList = users;
    })
  }

}

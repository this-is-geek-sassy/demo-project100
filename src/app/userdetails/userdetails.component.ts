import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userid!:number;   // will be passed as a route parameter 
  userdetails!:Array<any>;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserServiceService) { 
    this.activatedRoute.params.subscribe(newParams => {
      this.userid = Number(newParams['id']);

      //make another http call to get more details
      //iterate and get more details
      this.userService.getUser(this.userid).subscribe(user => {
        this.userdetails = JSON.parse(user);
      })
    })
  }

  ngOnInit(): void {
  }

}

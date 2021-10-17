import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username!:string;  // set by login component 
  constructor(private auth:AuthserviceService) { }

  ngOnInit(): void {
    this.auth.getUsername().subscribe(newUsername => {
      this.username = newUsername;
    });
  }

}

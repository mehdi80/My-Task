import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {DataServiceService} from "../services/data-service.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  constructor(private data: DataServiceService) {
  }

  users: any;

  ngOnInit() {
   this.showUsers()
  }

  showUsers() {
    this.data.getData().subscribe(res =>{
      this.users = res;

    })
  }
}

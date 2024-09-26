import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForOf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgForOf, RouterLink, HeaderComponent, RouterOutlet],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}

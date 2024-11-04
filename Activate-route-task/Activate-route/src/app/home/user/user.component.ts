import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {DataServiceService} from "../services/data-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {


  constructor(
    private data: DataServiceService,
    private router: Router,
    private http: HttpClient,
  ) {
  }

  users: any;
  searchValue: string = '';
  searchedUser: any;


  ngOnInit(): void {
    this.showUsers()
  }

  showUsers(): void {
    this.data.getData().subscribe(res => {
      this.users = res;
    })
  }

  onSearch(event: Event): void {
    event.preventDefault();

    (this.searchValue) ? this.router.navigate(['user'], {queryParams: {name: this.searchValue}}) : this.router.navigate(['user'])

    this.searchedUser = this.users.find((user: any) => {
      return user.name === this.searchValue;
    })

  }
}

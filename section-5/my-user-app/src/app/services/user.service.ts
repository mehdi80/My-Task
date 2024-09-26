import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private localStorageService: LocalStorageService) {}
  private getUserLists(): UserModel[] {
    return this.localStorageService.getLocalStorage('users');
  }

  getUsers() {
    return this.getUserLists();
  }

  getUserById(id: number) {
    return this.getUserLists().find((user) => user.id === id);
  }
}

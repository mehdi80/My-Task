import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { RegisterPageComponent } from './modules/register-page/register-page.component';
import { authGuard } from './auth.guard';
import { UserListComponent } from './modules/user-list/user-list.component';
import { UserDetailComponent } from './modules/user-detail/user-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', component: HomePageComponent, canActivate: [authGuard] },
      {
        path: 'users',
        component: UserListComponent,
        canActivate: [authGuard],
      },
      {
        path: 'users/:id',
        component: UserDetailComponent,
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
];

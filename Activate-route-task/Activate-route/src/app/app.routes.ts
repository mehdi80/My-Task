import {Route,} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./home/about/about.component";

export const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact',
  loadChildren:()=> import('./home/contact/contact.routes').then(n => n.ContactRoutes)},
  {path:'user',
  loadChildren:()=> import('./home/user/user.routes').then(m =>m.UserRoutes)},
];

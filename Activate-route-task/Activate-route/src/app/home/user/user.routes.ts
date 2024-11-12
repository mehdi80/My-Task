import {Route} from "@angular/router";
import {UserComponent} from "./user.component";
import {UserListComponent} from "./user-list/user-list.component";
import {EditUserComponent} from "./edit-user/edit-user.component";


export const UserRoutes: Route[] = [

  {path: "", component: UserComponent},
  {path: ":id", component: UserListComponent},
  {path: ':id/edit', component: EditUserComponent}
]

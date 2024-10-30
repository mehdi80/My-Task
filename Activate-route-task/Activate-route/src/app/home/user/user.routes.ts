import {Route} from "@angular/router";
import {UserComponent} from "./user.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserTableComponent} from "./user-table/user-table.component";


export const UserRoutes:Route[] = [
  {path:"",component:UserComponent},
  {path:":id",component:UserListComponent},
  {path:"user-table",component:UserTableComponent}
]

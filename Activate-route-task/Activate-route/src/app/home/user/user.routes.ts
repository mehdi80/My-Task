import {Route} from "@angular/router";
import {UserComponent} from "./user.component";
import {UserListComponent} from "./user-list/user-list.component";




export const UserRoutes:Route[] = [
  {path:"",component:UserComponent},
  {path:":id",component:UserListComponent}

]

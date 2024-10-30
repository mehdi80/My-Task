import {Route} from "@angular/router";
import {ContactComponent} from "./contact.component";


export const ContactRoutes:Route[] = [
  {path:'',component: ContactComponent},
  {path:"detail-contact",
    loadChildren:()=> import('./detail-contact/detailContact.routes').then(m =>m.DetailContactRoutes)},
]

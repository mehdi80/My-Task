import {Route} from "@angular/router";
import {Contact1Component} from "./contact1/contact1.component";
import {Contact2Component} from "./contact2/contact2.component";
import {DetailContactComponent} from "./detail-contact.component";



export const DetailContactRoutes: Route[] = [
  { path: "contact1", component: Contact1Component},
  { path: "contact2", component: Contact2Component},
  {path:'',component:DetailContactComponent},
]

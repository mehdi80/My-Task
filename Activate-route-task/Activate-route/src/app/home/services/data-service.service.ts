import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {
  }

  private url: string = "https://jsonplaceholder.typicode.com/users"

  getData(): Observable<any> {
    return  this.http.get(this.url);
  }
  getSearchUser(query:any):Observable<object> {
    return  this.http.get(`${this.url}?query=${query}`);
  }

  updateData(data:any,userId:string):Observable<any>{
    const putUrl: string = "https://jsonplaceholder.typicode.com/users/" + userId;
    const headers:HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' });
   return this.http.put<any>(putUrl,data,{headers})
  }
}

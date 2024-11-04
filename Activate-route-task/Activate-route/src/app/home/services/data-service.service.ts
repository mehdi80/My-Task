import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
}

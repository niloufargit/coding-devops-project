import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = environment.apiURL ;

  constructor(private http: HttpClient) {
    console.log("this.baseUrl", this.baseUrl)
  }

  savePersonage(person: any): Observable<any> {
    console.log("this.savePersonage", this.baseUrl)
    return this.http.post<any>(`${this.baseUrl}/book/save`, person);
  }

  getAllPersonages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/book/all`);
  }
}

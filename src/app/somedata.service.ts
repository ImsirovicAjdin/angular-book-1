import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SomedataService {

  constructor(private http: HttpClient) { }

  someMethodFromService(): Observable<Object> {

    const params = Math.round(Math.random()*100);

    return this.http.get(`https://api.mathjs.org/v4/?expr=${params}`);
  }
}

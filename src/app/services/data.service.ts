import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactData, Slider } from '../models/models';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class DataService {
   myAppUrl: string;
   constructor(private http: HttpClient) {
      this.myAppUrl = environment.endpoint;
   }
    //Project endpoints:
    getAllProjects(): Observable<Slider[]>{
        return this.http.get<Slider[]>(this.myAppUrl + '/api/projects')
    }
   //Contact endpoints:
   summitContactInfo(info: ContactData): Observable<void>{
      return this.http.post<void>(this.myAppUrl + `/api/contact/submit`, info)
   }
}
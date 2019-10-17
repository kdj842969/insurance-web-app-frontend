import { Injectable } from '@angular/core';
import {Application} from '../models/application';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  /*applications: any[] = [
    {id: 1, client: 'Clastle Storage', type: 'Car Insurance', status: 'Quotes Received'},
    {id: 2, client: 'Zeitgeist Labs', type: 'Car Insurance', status: 'Quotes Received'},
    {id: 3, client: 'Carl\'s Burger', type: 'Car Insurance', status: 'Quotes Received'},
    {id: 4, client: 'Tallageda Chocolates', type: 'Car Insurance', status: 'In progress'},
    {id: 5, client: 'Dalia\'s Jewelry', type: 'Car Insurance', status: 'Unopened'},
    {id: 6, client: 'Dave\'s sandwitch', type: 'Car Insurance', status: 'Unopened'},
    {id: 7, client: 'Sprig', type: 'Car Insurance', status: 'In progress'},
    {id: 8, client: 'Papa Jones', type: 'Car Insurance', status: 'In progress'},
    {id: 9, client: 'Sprocket Science', type: 'Car Insurance', status: 'Closed'},
  ];*/

  applications: Application[];

  constructor(private http: HttpClient) {}

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(`${environment.API_URL}/applications`, {withCredentials: true});
  }

  getApplication(id: number): Observable<Application> {
    return this.http.get<Application>(`${environment.API_URL}/applications/${id}`, {withCredentials: true});
  }

  addApplication(application): Observable<{success: boolean}> {
    return this.http.post<{success: boolean}>(`${environment.API_URL}/applications`, application, {withCredentials: true});
  }

  updateApplication(application, id: number): Observable<{success: boolean}> {
    return this.http.put<{success: boolean}>(`${environment.API_URL}/applications/${id}`, application, {withCredentials: true});
  }

  deleteApplication(id: number): Observable<{success: boolean}> {
    return this.http.delete<{success: boolean}>(`${environment.API_URL}/applications/${id}`, {withCredentials: true});
  }
}

import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../models/user';
import {map} from 'rxjs/internal/operators';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_API_URL = `${environment.API_URL}`;

  userSubject: Subject<User> = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) {
    this.checkLogin();
  }

  checkLogin() {
    this.http.get(`${this.AUTH_API_URL}/checklogin`, {withCredentials: true})
      .subscribe((res: {success: boolean, user: User}) => {
        if (res.success) {
          this.userSubject.next(res.user);
        }
      });
  }

  login(user): Observable<{success: boolean, user: User}> {
    const userParams: HttpParams = new HttpParams()
      .append('username', user.username)
      .append('password', user.password); // change json form to urlencoded data

    return this.http.post<{success: boolean, user: User}>(`${this.AUTH_API_URL}/login`, userParams, {withCredentials: true})
      .pipe(
        map((res: {success: boolean, user: User}) => {
          this.userSubject.next(res.user);
          return res;
        })
      );
  }

  register(user): Observable<{success: boolean}> {
    return this.http.post<{success: boolean, user: any}>(`${environment.API_URL}/users`, user);
  }

  logout(): Observable<{success: boolean}> {
    return this.http.post<{success: boolean}>(`${environment.API_URL}/logout`, null, {withCredentials: true});
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(`${error.error}`);
  }

}

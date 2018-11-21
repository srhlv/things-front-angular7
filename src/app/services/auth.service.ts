import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import SETTINGS from '../../app.settings';
import { User } from '../models/user';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(user: User): Observable<User> {
    return this.http.post<User>(`${SETTINGS.API.URL}/auth/signin`, user)
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(`${SETTINGS.API.URL}/auth/signup`, user)
  }
}

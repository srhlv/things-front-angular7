import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import SETTINGS from '../../app.settings'
import { Subscription } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(user: User): Subscription {
    return this.http.post<User>(`${SETTINGS.API.URL}/auth/signin`, user)
      .subscribe(
        user => {
          localStorage.token = user.token;
        },
        error => console.log(error)
      )
  }
}

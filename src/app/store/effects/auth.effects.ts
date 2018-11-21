import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthActionTypes, AuthFail, AuthSuccess, LoginSubmit, SignupSubmit } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  @Effect()
  loginSubmit$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSubmit),
    map((action: LoginSubmit) => action.payload),
    switchMap((user: User) => {
      return this.authService.signin(user).pipe(
        tap(user => { localStorage.token = user.token }),
        tap(() => this.router.navigate(['items'])),
        map(user => new AuthSuccess(user)),
        catchError(error => of(new AuthFail(error)))
      )
    })
  );

  @Effect()
  signupSubmit$ = this.actions$.pipe(
    ofType(AuthActionTypes.SignupSubmit),
    map((action: SignupSubmit) => action.payload),
    switchMap((user: User) => {
      return this.authService.signup(user).pipe(
        tap(user => { localStorage.token = user.token }),
        tap(() => this.router.navigate(['items'])),
        map(user => new AuthSuccess(user)),
        catchError(error => of(new AuthFail(error)))
      )
    })
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }
}

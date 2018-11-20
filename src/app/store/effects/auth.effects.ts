import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, LoginSubmit, LoginSuccess, LoginFail } from '../actions/auth.actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect()
  loginSubmit$ = this.actions$.pipe(
    ofType(AuthActionTypes.AuthSubmit),
    map((action: LoginSubmit) => action.payload),
    switchMap((user: User) => {
      return this.authService.signin(user).pipe(
        tap(() => this.router.navigate(['items'])),
        map(user => new LoginSuccess(user)),
        catchError(error => of(new LoginFail(error)))
      )
    })
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }
}

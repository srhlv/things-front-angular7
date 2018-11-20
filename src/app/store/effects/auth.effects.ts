import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, AuthSubmit, AuthSuccess, AuthFail } from '../actions/auth.actions';
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
    map((action: AuthSubmit) => action.payload),
    switchMap((user: User) => {
      return this.authService.signin(user).pipe(
        tap(() => this.router.navigate(['items'])),
        map(user => new AuthSuccess(user)),
        catchError(error => of(new AuthFail(error)))
      )
    })
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }
}

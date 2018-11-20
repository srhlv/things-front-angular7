import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginPageActionTypes, LoginSubmit } from './login-page.actions';
import { map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class LoginPageEffects {

  @Effect()
  loginSubmit$ = this.actions$.pipe(
    ofType(LoginPageActionTypes.LoginSubmit),
    map((action: LoginSubmit) => action.payload),
    switchMap((user: User) => {
      return this.authService.signin(user).pipe(
          
      )
    })
  );

  constructor(private actions$: Actions, private authService: AuthService) { }
}

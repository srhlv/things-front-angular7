import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user';

export enum AuthActionTypes {
  LoginSubmit = '[Auth] Login Submitted',
  LoginSuccess = '[Auth] Login Successful',
  LoginFail = '[Auth] Login Failed'
}

export class LoginSubmit implements Action {
  readonly type = AuthActionTypes.LoginSubmit;

  constructor(public payload: User){}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: User){}
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFail;

  constructor(public payload: any){}
}

export type AuthActions = LoginSubmit | LoginSuccess | LoginFail;

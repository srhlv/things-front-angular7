import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user';

export enum LoginPageActionTypes {
  LoginSubmit = '[LoginPage] Load Button Submitted',
  LoginSuccess = '[LoginPage] Login Successful',
  LoginFail = '[LoginPage] Login Failed'
}

export class LoginSubmit implements Action {
  readonly type = LoginPageActionTypes.LoginSubmit;

  constructor(public payload: User){}
}

export class LoginSuccess implements Action {
  readonly type = LoginPageActionTypes.LoginSuccess;

  constructor(public payload: User){}
}

export class LoginFail implements Action {
  readonly type = LoginPageActionTypes.LoginFail;

  constructor(public payload: User){}
}

export type LoginPageActions = LoginSubmit | LoginSuccess | LoginFail;

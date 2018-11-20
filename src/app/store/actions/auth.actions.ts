import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user';

export enum AuthActionTypes {
  AuthSubmit = '[Auth] Login Submitted',
  AuthSuccess = '[Auth] Login Successful',
  AuthFail = '[Auth] Login Failed'
}

export class AuthSubmit implements Action {
  readonly type = AuthActionTypes.AuthSubmit;

  constructor(public payload: User){}
}

export class AuthSuccess implements Action {
  readonly type = AuthActionTypes.AuthSuccess;

  constructor(public payload: User){}
}

export class AuthFail implements Action {
  readonly type = AuthActionTypes.AuthFail;

  constructor(public payload: any){}
}

export type AuthActions = AuthSubmit | AuthSuccess | AuthFail;

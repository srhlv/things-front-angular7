import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user';

export enum AuthActionTypes {
  LoginSubmit = '[Auth] Login Submitted',
  SignupSubmit = '[Auth] Signup Submitted',
  AuthSuccess = '[Auth] Login Successful',
  AuthFail = '[Auth] Login Failed'
}

export class LoginSubmit implements Action {
  readonly type = AuthActionTypes.LoginSubmit;

  constructor(public payload: User) { }
}

export class SignupSubmit implements Action {
  readonly type = AuthActionTypes.SignupSubmit;

  constructor(public payload: User) { }
}

export class AuthSuccess implements Action {
  readonly type = AuthActionTypes.AuthSuccess;

  constructor(public payload: User) { }
}

export class AuthFail implements Action {
  readonly type = AuthActionTypes.AuthFail;

  constructor(public payload: any) { }
}

export type AuthActions = LoginSubmit | SignupSubmit | AuthSuccess | AuthFail;

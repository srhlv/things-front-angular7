import { Action } from '@ngrx/store';
import { LoginPageActions, LoginPageActionTypes } from './login-page.actions';
import { User } from 'src/app/models/user';

export interface LoginState {
  isLoggedIn: boolean
  user: User
}

export const initialState: LoginState = {
  isLoggedIn: false,
  user: undefined
};

export function reducer(state = initialState, action: LoginPageActions): LoginState {
  switch (action.type) {

    case LoginPageActionTypes.LoginSuccess: {
      const user = action.payload;

      return {
        isLoggedIn: true,
        user
      };
    }

    case LoginPageActionTypes.LoginFail: {
      const user = action.payload;

      return {
        isLoggedIn: false,
        user
      };
    }

    default:
      return state;
  }
}

import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { User } from 'src/app/models/user';

export interface AuthState {
  isLogged: boolean
  user: User,
  isLoginFailed: boolean
}

export const initialState: AuthState = {
  isLogged: false,
  user: undefined,
  isLoginFailed: false
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.AuthSuccess: {
      const user = action.payload;

      return {
        isLogged: true,
        isLoginFailed: false,
        user
      };
    }

    case AuthActionTypes.AuthFail: {
      const error = action.payload;

      console.log('Error while login', error);
      return {
        isLogged: false,
        isLoginFailed: true,
        user: undefined
      };
    }

    default:
      return state;
  }
}

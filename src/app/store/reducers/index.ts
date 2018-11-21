import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromItems from './items.reducer'
import * as fromAuth from './auth.reducer'
import { User } from "src/app/models/user";

export interface ThingsState {
    items: fromItems.ItemsState,
    auth:  fromAuth.AuthState
}

export const reducers: ActionReducerMap<ThingsState> = {
    items: fromItems.itemsReducer,
    auth: fromAuth.authReducer
}

export const getItemsState = (state: ThingsState) => state.items
export const getItemsEntities = createSelector(getItemsState, (state: fromItems.ItemsState) => state.entities)
export const getAllItems = createSelector(getItemsEntities, fromItems.getAllItems);

export const getAuthState = (state: ThingsState) => state.auth
export const isAuthFailed = createSelector(getAuthState, (state: fromAuth.AuthState): boolean => state.isLoginFailed)
export const getUser = createSelector(getAuthState,  (state: fromAuth.AuthState): User => state.user )
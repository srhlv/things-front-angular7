import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromItems from './items.reducer'
import * as fromAuth from './auth.reducer'

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
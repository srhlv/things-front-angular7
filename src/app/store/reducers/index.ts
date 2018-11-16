import * as fromItems from "./items.reducer";
import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";

export interface ThingsState {
    items: fromItems.ItemsState
}

export const reducers: ActionReducerMap<ThingsState> = {
    items: fromItems.reducer
}

export const getThingsState = createFeatureSelector<ThingsState>('things');

export const getItemsState = createSelector(getThingsState, (state: ThingsState) => state.items)

export const getItemsEntities = createSelector(getItemsState, (state: fromItems.ItemsState) => state.entities)

export const getAllItems = createSelector(getItemsEntities, fromItems.getAllItems);
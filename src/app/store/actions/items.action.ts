import {Action} from '@ngrx/store'
import { Item } from 'src/app/models/item'

export const LOAD_ITEMS = '[Items] Load Items'
export const LOAD_ITEMS_FAIL = '[Items] Load Items Fail'
export const LOAD_ITEMS_SUCCESS = '[Items] Load Items Success'

export class LoadItems implements Action {
    readonly type = LOAD_ITEMS;
}

export class LoadItemsFail implements Action {
    readonly type = LOAD_ITEMS_FAIL;

    constructor(public payload: any){}
}

export class LoadItemsSuccess implements Action {
    readonly type = LOAD_ITEMS_SUCCESS;

    constructor(public payload: Item[]){}
}

export type ItemsAction = LoadItems | LoadItemsFail | LoadItemsSuccess
import { Action } from '@ngrx/store'
import { Item } from 'src/app/models/item'

export const LOAD_ITEMS = '[Items] Load Items'
export const LOAD_ITEMS_FAIL = '[Items] Load Items Fail'
export const LOAD_ITEMS_SUCCESS = '[Items] Load Items Success'
export const DELETE_ITEM = '[Items] Delete Item'
export const DELETE_ITEM_SUCCESS = '[Items] Delete Item Success'
export const DELETE_ITEM_FAIL = '[Items] Delete Item Fail'
export const ADD_ITEM = '[Items] Add Item'
export const ADD_ITEM_SUCCESS = '[Items] Add Item Success'
export const ADD_ITEM_FAIL = '[Items] Add Item Fail'

export class LoadItems implements Action {
    readonly type = LOAD_ITEMS;
}

export class LoadItemsFail implements Action {
    readonly type = LOAD_ITEMS_FAIL;

    constructor(public payload: any) { }
}

export class LoadItemsSuccess implements Action {
    readonly type = LOAD_ITEMS_SUCCESS;

    constructor(public payload: Item[]) { }
}

export class AddItem implements Action {
    readonly type = ADD_ITEM;

    constructor(public payload: { item: Item, image: File }) { }
}

export class AddItemFail implements Action {
    readonly type = ADD_ITEM_FAIL

    constructor(public payload: Item) { }
}

export class AddItemSuccess implements Action {
    readonly type = ADD_ITEM_SUCCESS;

    constructor(public payload: Item) { }
}

export class DeleteItem implements Action {
    readonly type = DELETE_ITEM;

    constructor(public payload: Item) { }
}

export class DeleteItemFail implements Action {
    readonly type = DELETE_ITEM_FAIL

    constructor(public payload: Item) { }
}

export class DeleteItemSuccess implements Action {
    readonly type = DELETE_ITEM_SUCCESS;

    constructor(public payload: Item) { }
}

export type ItemsAction = LoadItems | LoadItemsFail | LoadItemsSuccess | DeleteItem |
    DeleteItemFail | DeleteItemSuccess | AddItem | AddItemFail | AddItemSuccess
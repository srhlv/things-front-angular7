import { Action } from '@ngrx/store'
import { Item } from 'src/app/models/item'

export enum ItemActionTypes {
    LOAD_ITEMS_FAIL = '[Items] Load Items Fail',
    LOAD_ITEMS = '[Items] Load Items',
    LOAD_ITEMS_SUCCESS = '[Items] Load Items Success',
    DELETE_ITEM = '[Items] Delete Item',
    DELETE_ITEM_SUCCESS = '[Items] Delete Item Success',
    DELETE_ITEM_FAIL = '[Items] Delete Item Fail',
    ADD_ITEM = '[Items] Add Item',
    ADD_ITEM_SUCCESS = '[Items] Add Item Success',
    ADD_ITEM_FAIL = '[Items] Add Item Fail'
}

export class LoadItems implements Action {
    readonly type = ItemActionTypes.LOAD_ITEMS;
}

export class LoadItemsFail implements Action {
    readonly type = ItemActionTypes.LOAD_ITEMS_FAIL;

    constructor(public payload: any) { }
}

export class LoadItemsSuccess implements Action {
    readonly type = ItemActionTypes.LOAD_ITEMS_SUCCESS;

    constructor(public payload: Item[]) { }
}

export class AddItem implements Action {
    readonly type = ItemActionTypes.ADD_ITEM;

    constructor(public payload: { item: Item, image: File }) { }
}

export class AddItemFail implements Action {
    readonly type = ItemActionTypes.ADD_ITEM_FAIL

    constructor(public payload: Item) { }
}

export class AddItemSuccess implements Action {
    readonly type = ItemActionTypes.ADD_ITEM_SUCCESS;

    constructor(public payload: Item) { }
}

export class DeleteItem implements Action {
    readonly type = ItemActionTypes.DELETE_ITEM;

    constructor(public payload: Item) { }
}

export class DeleteItemFail implements Action {
    readonly type = ItemActionTypes.DELETE_ITEM_FAIL

    constructor(public payload: Item) { }
}

export class DeleteItemSuccess implements Action {
    readonly type = ItemActionTypes.DELETE_ITEM_SUCCESS;

    constructor(public payload: Item) { }
}

export type ItemsAction = LoadItems | LoadItemsFail | LoadItemsSuccess | DeleteItem |
    DeleteItemFail | DeleteItemSuccess | AddItem | AddItemFail | AddItemSuccess
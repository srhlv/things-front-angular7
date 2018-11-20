// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
// import * as fromItems from '../actions/items.action'
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/models/item';
import { ItemActionTypes, LoadItemsSuccess, LoadItemsFail, AddItem, AddItemSuccess, AddItemFail, DeleteItem } from '../actions/items.action';

@Injectable()
export class ItemsEffects {
    constructor(private actions$: Actions, private itemsService: ItemsService) { }

    @Effect()
    loadItems$: Observable<Action> = this.actions$.pipe(
        ofType(ItemActionTypes.LOAD_ITEMS),
        switchMap(action =>
            this.itemsService.fetchItems().pipe(
                map(items => new LoadItemsSuccess(items)),
                catchError(error => of(new LoadItemsFail(error)))
            )

        )
    );

    @Effect()
    addItem$: Observable<Action> = this.actions$.pipe(
        ofType(ItemActionTypes.ADD_ITEM),
        map((action: AddItem) => action.payload),
        switchMap(({ item, image }) =>
            this.itemsService.createItem(item, image).pipe(
                map((newItem: Item) => new AddItemSuccess(newItem)),
                catchError(error => of(new AddItemFail(item)))
            )
        )
    )

    @Effect()
    deleteItem$: Observable<Action> = this.actions$.pipe(
        ofType(ItemActionTypes.DELETE_ITEM),
        map((action: DeleteItem) => action.payload),
        switchMap((item) =>
            this.itemsService.deleteItem(item).pipe(
                map(() => new AddItemSuccess(item)),
                catchError(error => of(new AddItemFail(item)))
            )
        )
    )
}
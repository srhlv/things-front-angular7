// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as fromItems from '../actions/items.action'
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/models/item';

@Injectable()
export class ItemsEffects {
    constructor(private actions$: Actions, private itemsService: ItemsService) { }

    @Effect()
    loadItems$: Observable<Action> = this.actions$.pipe(
        ofType(fromItems.LOAD_ITEMS),
        switchMap(action =>
            this.itemsService.fetchItems().pipe(
                map(items => new fromItems.LoadItemsSuccess(items)),
                catchError(error => of(new fromItems.LoadItemsFail(error)))
            )

        )
    );

    @Effect()
    addItem$: Observable<Action> = this.actions$.pipe(
        ofType(fromItems.ADD_ITEM),
        map((action: fromItems.AddItem) => action.payload),
        switchMap(({ item, image }) =>
            this.itemsService.createItem(item, image).pipe(
                map((newItem: Item) => new fromItems.AddItemSuccess(newItem)),
                catchError(error => of(new fromItems.AddItemFail(item)))
            )
        )
    )

    @Effect()
    deleteItem$: Observable<Action> = this.actions$.pipe(
        ofType(fromItems.DELETE_ITEM),
        map((action: fromItems.DeleteItem) => action.payload),
        switchMap((item) =>
            this.itemsService.deleteItem(item).pipe(
                map(() => new fromItems.AddItemSuccess(item)),
                catchError(error => of(new fromItems.AddItemFail(item)))
            )
        )
    )
}
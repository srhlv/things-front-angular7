// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as fromItems from '../actions'
import { ItemsService } from 'src/app/services/items.service';

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
}
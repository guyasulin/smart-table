import { Item } from 'src/app/model/item';
import { ItemListService } from './../service/item-list.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as fromItemAction  from './item.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class ItemEffects {



  constructor(private actions$: Actions,
    private itemListService:ItemListService) {}


    loadItems$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(fromItemAction.loadItems),
          switchMap(() =>
            this.itemListService.getList().pipe(
              map((data) => {
               return fromItemAction.loadItemsSuccess({ item: data })
              }),
              catchError(error => of(fromItemAction.loadItemsFailure({ error }))))
            ),
      );
    });

}


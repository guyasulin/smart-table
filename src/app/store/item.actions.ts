import { Item } from 'src/app/model/item';
import { createAction, props } from '@ngrx/store';

export const loadItems = createAction(
  '[Item] Load Items'
);

export const loadItemsSuccess = createAction(
  '[Item] Load Items Success',
  props<{ item: Item[] }>()
);

export const loadItemsFailure = createAction(
  '[Item] Load Items Failure',
  props<{ error: any }>()
);

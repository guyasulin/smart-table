import { Action, createReducer, on } from '@ngrx/store';
import { Item } from 'src/app/model/item';
import * as fromItemAction  from './item.actions';

export const itemFeatureKey = 'item';

export interface State {
  items: Item[];
}

export const initialState: State = {
  items: []
};

export const reducer = createReducer(
  initialState,
  on(fromItemAction.loadItemsSuccess, (state, action) => {
    return {
      ...state,
      items: action.item
    }
  }),
);

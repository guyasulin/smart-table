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
  on(fromItemAction.removeItem, (state, action) => {
		const deleteItem = state.items.filter((item) => item.id !== action.id);
    return {
      ...state,
      items: deleteItem
    }
  }),
  on(fromItemAction.updateItem, (state, action) => {
    const updateItem = state.items.map((item) => action.item.id === item.id ? action.item : item)
    return {
      ...state,
      items: updateItem
    }
  }),
  on(fromItemAction.addItem, (state, action) => {
    const { items } = state;
		const id = items[items.length - 1] ? items[items.length - 1].id + 1 : 1;
		const newItem = {
			...action.item,
			id
		};
		const newItems = [ ...items ];
		newItems.unshift(newItem);
    return {
      ...state,
      items: newItems
    }
  }),
);

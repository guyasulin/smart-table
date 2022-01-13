import { itemFeatureKey, State } from './item.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const selectItemState = createFeatureSelector<State>(
  itemFeatureKey
)

export const getItems = createSelector(selectItemState, state => state.items)

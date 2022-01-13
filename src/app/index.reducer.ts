import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromItem from './store/item.reducer';


export interface AppState {
    items: fromItem.State;
}

export const AppReducer: ActionReducerMap<AppState> =  {
  items: fromItem.reducer
}

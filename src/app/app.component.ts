import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import * as fromItemAction from './store/item.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/index.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public listItem$: Observable<any>;

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    this.store.dispatch(fromItemAction.loadItems());
    this.listItem$ =  this.store.select(store => store.items.items);
  }
}

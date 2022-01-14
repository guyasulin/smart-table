import { AddItemComponent } from './popups/add-item/add-item.component';
import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import * as fromItemAction from './store/item.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/index.reducer';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public listItem$: Observable<any>;

  constructor(private store: Store<AppState>, public dialog: MatDialog){}

  ngOnInit() {
    this.store.dispatch(fromItemAction.loadItems());
    this.listItem$ =  this.store.select(store => store.items.items);


  }

  addItem() {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

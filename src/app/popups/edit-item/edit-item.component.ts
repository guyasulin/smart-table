import { Item } from 'src/app/model/item';
import { Component, Input, OnInit } from '@angular/core';
import * as fromItemAction from '../../store/item.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/index.reducer';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  edit(item) {
    const newOdj = {
      albumId: this.item.albumId,
      id: this.item.id,
      title: item.value.title,
      url: this.item.url,
      thumbnailUrl: this.item.thumbnailUrl,
    }
    this.store.dispatch((fromItemAction.updateItem({ item:newOdj})));
  }
}

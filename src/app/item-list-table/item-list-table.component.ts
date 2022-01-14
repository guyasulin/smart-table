import { Item } from 'src/app/model/item';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/index.reducer';
import * as fromItemAction from '../store/item.actions';
import { ItemListService } from 'src/app/service/item-list.service';

@Component({
  selector: 'app-item-list-table',
  templateUrl: './item-list-table.component.html',
  styleUrls: ['./item-list-table.component.scss']
})
export class ItemListTableComponent implements OnInit {

  public displayedColumns: string[] = ['profile', 'name', 'id','albumId', 'delete', 'edit'];
  public dataSource: any[]=[];
  public pageIndex: number;
  public item: any;
  @Input() listItem: Item[];

  constructor(private store: Store<AppState>,
    private itemListService: ItemListService){}

  ngOnInit(): void {}

  pageEvent(event) {
    this.pageIndex = event.pageIndex + 1
  }


  removeItem(item: Item) {
    console.log(item);
		this.store.dispatch(fromItemAction.removeItem({ id: item.id }));
  }

  selectedItem(row) {
    this.itemListService.selectedItemChanged(row.id)
  }

}

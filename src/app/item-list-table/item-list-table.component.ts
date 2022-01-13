import { Item } from 'src/app/model/item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list-table',
  templateUrl: './item-list-table.component.html',
  styleUrls: ['./item-list-table.component.scss']
})
export class ItemListTableComponent implements OnInit {

  @Input() listItem: Item[];
  public displayedColumns: string[] = ['profile', 'name', 'id','albumId', 'delete'];
  public dataSource: any;
  public pageIndex: number;


  constructor() { }

  ngOnInit(): void {}

  pageEvent(event) {
    this.pageIndex = event.pageIndex + 1
  }


  removeItem(item) {
    console.log(item);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

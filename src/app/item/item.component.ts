import { ItemListService } from './../service/item-list.service';
import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public errorMesage = '';

  constructor(private itemListService: ItemListService) { }

  item$ = this.itemListService.selectedItem$
  .pipe(
    catchError(err => {
      this.errorMesage = err;
      return  EMPTY
    })
  )
  ngOnInit(): void {
  }

}

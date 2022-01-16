import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppState } from 'src/app/index.reducer';
import { Item } from 'src/app/model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  private itemSelectedSubject = new BehaviorSubject<number>(0);
  itemSelectdAction$ = this.itemSelectedSubject.asObservable();

  constructor(private http: HttpClient,
    private store: Store<AppState>,) { }

  getList(): Observable<Item[]> {
    return this.http.get<Item[]>('https://jsonplaceholder.typicode.com/photos');
  }

  listItem$ =  this.store.select(store => store.items.items);
  selectedItem$ = combineLatest([
    this.listItem$ ,
    this.itemSelectdAction$
  ]).pipe(
    map(([items, selectedItemId]) =>
    items.find(item => item.id === selectedItemId)
    ),
  );

  selectedItemChanged(selectedItemId:number): void {
    this.itemSelectedSubject.next(selectedItemId)
  }
}

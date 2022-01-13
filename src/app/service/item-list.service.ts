import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Item[]> {
    return this.http.get<Item[]>('https://jsonplaceholder.typicode.com/photos');
  }
}

import { Item } from 'src/app/model/item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Item[], itemIdTitle: string): Item[] {
    if (!items || !itemIdTitle) {
      return items;
    }

    return items.filter(item =>
      item.title.toLowerCase().startsWith(itemIdTitle.toLowerCase()) ||
      item.id.toString().startsWith(itemIdTitle.toLowerCase()));
  }

}

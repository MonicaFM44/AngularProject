import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], textFilter: string): any[] {
    if (!items) return [];
    if (!textFilter) return items;

    // creates a regular expression with the string filterBy.
    // g: global, more than one result
    // i: case insensitive
    const filter = new RegExp(textFilter, 'gi');
    return items.filter(myNew => myNew.title.match(filter));
  }
}

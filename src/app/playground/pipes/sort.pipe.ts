import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    return value.sort((a, b) => a.name > b.name ? 1 : -1)
  }

}

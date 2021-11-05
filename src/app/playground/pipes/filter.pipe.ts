import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    const resultsArray: string[] = []
    if (value.length === 0 || filterString === "") {
      return value
    }
    else {
      for (const item of value) {
        if (item[propName] === filterString) {
          resultsArray.push(item)
        }
      }
    }
    return resultsArray
  }
}

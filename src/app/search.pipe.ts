import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,searchterm: any): any {
    return value.filter(function(searchess:any){
      return searchess.name.indexOf(searchterm) > 0
    })
 
  }
}

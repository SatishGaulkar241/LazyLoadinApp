import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userpip'
})
export class UserpipPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]=args
    return value * x;
  }

}

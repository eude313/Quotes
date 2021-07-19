import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'competeDate'
})
export class CompeteDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

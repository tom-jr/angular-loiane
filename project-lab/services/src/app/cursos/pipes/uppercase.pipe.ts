import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string | undefined {
    console.log(args);
    return value?.toUpperCase();
  }

}

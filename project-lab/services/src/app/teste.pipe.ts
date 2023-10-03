import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teste'
})
export class TestePipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string | undefined{
    console.log(args)
    return value?.toUpperCase();
  }

}

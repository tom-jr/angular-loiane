import {Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent {

  url: string = 'https://www.loaine.com';
  urlImage: string = 'http://lorempixel.com.br/500/400/?1';

  twoTermsSum(num1: number, num2: number): number {
    return num1 + num2;
  }
}

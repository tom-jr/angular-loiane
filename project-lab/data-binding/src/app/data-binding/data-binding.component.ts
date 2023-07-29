import {Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent {

  url: string = 'https://www.loaine.com';
  urlImage: string = 'http://lorempixel.com.br/500/400/?1';
  aula = 2;
  options = [
    {label: 'Primary', value: 'alert-primary'},
    {label: 'Secondary', value: 'alert-secondary'},
    {label: 'Success', value: 'alert-success'},
    {label: 'Danger', value: 'alert-danger'},
    {label: 'Warning', value: 'alert-warning'},
    {label: 'Info', value: 'alert-info'},
    {label: 'Light', value: 'alert-light'},
    {label: 'Dark', value: 'alert-dark'}
  ];
  model!: string;

  twoTermsSum(num1: number, num2: number): number {
    return num1 + num2;
  }
}

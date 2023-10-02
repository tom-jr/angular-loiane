import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent {

  url: string = 'https://www.loaine.com';
  urlImage: string = 'http://lorempixel.com.br/500/400/?1';
  aula = 1;
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
  name!: any;
  name2!: any;
  name3!: any;

  @ViewChild('input') element: any;

  propertySend = 'Hello World!';
  num = 10;
  valorEmitido!: number;

  twoTermsSum(num1: number, num2: number): number {
    return num1 + num2;
  }

  onClick() {
    console.log('CLicked!');
  }

  onKeyUp(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event?.target).value);
  }

  onKeyUp2(value: any) {
    console.log(value);

  }

  onInput(value: string, n = 0) {

    n == 0 ? this.name = value : this.name2 = value;

  }

  onEmitValue(event: { valorEmitido: number }) {
    console.log(event)
    this.valorEmitido = event.valorEmitido;
  }

  inputChange() {
    console.log(this.element.nativeElement.value);
  }

  changeAula(aulaNumero: any) {
    this.aula = aulaNumero;
  }
}

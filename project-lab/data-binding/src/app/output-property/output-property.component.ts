import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
  @Input('valorInicial') num!: number;

  @Output() valorEmit = new EventEmitter();
  sum(number: number) {
    this.num += number;
    this.valorEmit.emit({valorEmitido: this.num})
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent {

  @Input('property-custom') property!: string;


}

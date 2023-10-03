import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: 'span[hightlight]'
})
export class HightlightDirective {
  backgroundColor?: string;

  constructor() {
  }

  @HostBinding('style.background') get color() {
    return this.backgroundColor;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.backgroundColor = 'white';
  }
}

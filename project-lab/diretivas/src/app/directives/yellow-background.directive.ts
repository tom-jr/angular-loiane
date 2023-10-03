import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[yellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    render.setStyle(elementRef.nativeElement,'backgroundColor','yellow' )
  }

}

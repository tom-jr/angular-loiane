import {Directive, ElementRef, HostBinding, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[hightlight2]'
})
export class Hightlight2Directive implements OnInit {

  @Input('hightlight2') color?: string;

private backgroundColor?: string;

  constructor(private elemento: ElementRef, private render: Renderer2) {
    // this.render.setStyle(this.elemento, 'backgroundColor', this.color);

  }

  @HostBinding('style.backgroundColor') get bindBackgroundColor() {
    return this.backgroundColor;
  }

  ngOnInit(): void {
    this.backgroundColor = this.color;
    // this.render.setStyle(this.elemento.nativeElement, 'backgroundColor', this.color);
  }
}

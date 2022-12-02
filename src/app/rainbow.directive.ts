import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  COLORS = [
    'red',
    'yellow',
    'purple',
    'blue',
    'green',
    'aqua',
    'orange',
    'pink',
  ];
  @HostBinding('style.color') color = '';
  @HostBinding('style.borderColor') bcolor = '';
  constructor() {}
  @HostListener('keyup') onKeyup() {
    let colorIndex = Math.trunc(Math.random() * 10);
    this.color =
      this.COLORS[
        colorIndex < this.COLORS.length
          ? colorIndex
          : colorIndex % this.COLORS.length
      ];
    this.bcolor = this.color;
  }
}

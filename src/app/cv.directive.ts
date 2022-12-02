import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCv]',
})
export class CvDirective {
  @HostBinding('style.backgroundColor') bgColor = '';
  constructor() {}

  @HostListener('mouseenter') mouseenter() {
    this.bgColor = 'grey';
  }
  @HostListener('mouseleave') mouseleave() {
    this.bgColor = 'white';
  }
}

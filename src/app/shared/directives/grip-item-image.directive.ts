import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]',
})
export class GridItemImageDirective {
  @Input() appGridItemImage = '2rem';
  @Input() fitMode = 'cover';

  @HostBinding('style.grid-area') gridArea = 'image';
  @HostBinding('style.width') width = this.appGridItemImage;
  @HostBinding('style.height') height = this.appGridItemImage;
  @HostBinding('style.object-fit') objectFit = this.fitMode;
  
  constructor() {
  }

  @HostListener('click', ['$event.target'])
  handleClick(ev) {
    console.log(ev)
  }

}
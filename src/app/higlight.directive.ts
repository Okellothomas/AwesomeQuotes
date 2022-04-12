import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHiglight]'
})
export class HiglightDirective {
  elem: any;

  constructor(elem:ElementRef) { 
    this.elem.nativeElement.style.backgroundColor="yellow";
  }

}

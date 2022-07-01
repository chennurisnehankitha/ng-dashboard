import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[pHighlighter]'
})
export class SelectedItemDirective implements AfterViewInit, OnChanges  {
  @Input('pHighlighter') options: any;

  constructor(private el: ElementRef) {
    
 }

 ngOnChanges(changes: SimpleChanges): void {
   console.log('this.options.apply onchanges');
  this.ngAfterViewInit();  
 }

 ngAfterViewInit(): void {
   console.log('this.options', this.options);
   
  if (!this.options.apply) {
    this.el.nativeElement.style.backgroundColor = '#f7f7f7';
    this.el.nativeElement.style.borderLeft = 'none';
  } else {
    this.el.nativeElement.style.backgroundColor = '#e1e1e5';
    this.el.nativeElement.style.borderLeft = '5px solid blue';
  }

}

}

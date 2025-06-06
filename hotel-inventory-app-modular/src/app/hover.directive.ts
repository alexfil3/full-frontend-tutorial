import { Directive, ElementRef, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: false
})
export class HoverDirective implements OnInit {
  @Input() appHover: string = 'red'

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.appHover);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
  }
}

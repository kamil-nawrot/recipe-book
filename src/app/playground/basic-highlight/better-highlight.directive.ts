import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  @HostListener("mouseenter") mouseIn(event: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "green"
    )
  }

  @HostListener("mouseleave") mouseOut(event: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "inherit"
    )
  }

}

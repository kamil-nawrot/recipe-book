import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @HostBinding("style.backgroundColor") backgroundColor: string = "initial"

  @HostListener("mouseenter") mouseIn(event: Event) {
    this.backgroundColor = "green"
  }

  @HostListener("mouseleave") mouseOut(event: Event) {
    this.backgroundColor = "inherit"
  }

}

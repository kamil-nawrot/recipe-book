import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @Input("appBetterHighlight") color = "yellow"

  @HostBinding("style.backgroundColor") backgroundColor: string = "inherit"

  @HostListener("mouseenter") mouseIn(event: Event) {
    this.backgroundColor = this.color
  }

  @HostListener("mouseleave") mouseOut(event: Event) {
    this.backgroundColor = "inherit"
  }

}

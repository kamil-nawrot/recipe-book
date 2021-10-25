import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private dropdownButton: ElementRef, private renderer: Renderer2) { }

  @HostListener("click") onDropdownButtonClicked() {
    const dropdownMenu = this.renderer.nextSibling(this.dropdownButton.nativeElement)

    if (this.dropdownButton.nativeElement.classList.contains("show")) {
      this.renderer.removeClass(this.dropdownButton.nativeElement, "show")
    }
    else {
      this.renderer.addClass(this.dropdownButton.nativeElement, "show")
    }
    dropdownMenu.classList.toggle("show")
  }

}

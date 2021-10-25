import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input("appUnless") set unless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.template)
    }
    else {
      this.viewContainer.clear()
    }
  }

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

}

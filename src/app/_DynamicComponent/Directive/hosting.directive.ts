import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[list-host]'
})
export class HostDirective {
  constructor( public viewContainerRef: ViewContainerRef ) {
  }
}

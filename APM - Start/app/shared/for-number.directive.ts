import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Repeat the host element the provided number of times
 * 
 * <li *pmForNumber="numIterations" />
 * 
 */
@Directive({ selector: '[pmForNumber]'})
export class ForNumberDirective {
  constructor (private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef ) { }

  @Input() set pmForNumber(numIterations: number) {
    for (let i = 0; i < numIterations; i++) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}

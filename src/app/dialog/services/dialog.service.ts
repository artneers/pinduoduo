import { DOCUMENT } from '@angular/common';
import { DomService, ChildConfig } from './dom.service';
import { Inject, Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private readonly dialogElementId = 'dialog-container';
  private readonly overlayElementId = 'overlay';
  private data$ = new BehaviorSubject<object | null>(null);

  constructor(
    private domService: DomService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  open(component: Type<any>, childConfig: ChildConfig) {
    this.domService.appendComponentTo(this.dialogElementId, component, childConfig);
    if(childConfig.position) {
      const element = document.getElementById(this.dialogElementId);
      element.style.top = childConfig.position.top;
      element.style.left = childConfig.position.left;
      element.style.width = childConfig.position.width;
      element.style.height = childConfig.position.height;
    }
    this.toggleAll();
    this.setData(null);
  }

  close() {
    this.domService.removeComponent();
    this.toggleAll();
  }

  getData() {
    return this.data$.asObservable();
  }

  setData(value: object) {
    this.data$.next(value);
  }

  private toggleAll() {
    this.toggleVisibility(this.document.getElementById(this.dialogElementId));
    this.toggleVisibility(this.document.getElementById(this.overlayElementId));
  }

  private toggleVisibility(element) {
    if(element.classList.contains('show')) {
      element.classList.remove('show');
      element.classList.add('hidden');
      return;
    }
    if(element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      element.classList.add('show');
    }
  }
}

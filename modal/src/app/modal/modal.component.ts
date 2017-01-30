import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { Content1Component } from '../content1/content1.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  currentComponent = null;
  display = 'none';

  @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  @Input() set componentData(data: any) {
    if (!data) {
      return;
    }

    let factory = this.resolver.resolveComponentFactory(data);
    let component = this.content.createComponent(factory);

    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
    this.display = '';
  }

  ngOnInit() {
  }

  close() {
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
    this.display = 'none';
  }
}

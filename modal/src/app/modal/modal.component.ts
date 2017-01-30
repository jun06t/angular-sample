import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { Content1Component } from '../content1/content1.component';
import { Content2Component } from '../content2/content2.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  currentComponent = null;

  @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  @Input() set componentData(data: any) {
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    let factory = this.resolver.resolveComponentFactory(data);

  }

  ngOnInit() {
  }

}

import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {
  public vcr: ViewContainerRef;
  private currentComponent = null;

  private contentSource: Subject<boolean> = new Subject<boolean>();
  public content$= this.contentSource.asObservable();

  constructor(private resolver: ComponentFactoryResolver) { }

  open(data: any): void {
    if (!data) {
      return;
    }

    const factory = this.resolver.resolveComponentFactory(data);
    const component = this.vcr.createComponent(factory);

    // if other modal container is created
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
    this.contentSource.next(true);
  }

  close(): void {
    if (this.currentComponent) {
      this.currentComponent.destroy();
      this.contentSource.next(false);
    }
  }
}

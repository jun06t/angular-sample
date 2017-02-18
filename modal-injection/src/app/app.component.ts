import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CompleteComponent } from './complete/complete.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modal: ModalService) {}

  confirm(): void {
    this.modal.open(ConfirmationComponent);
  }

  complete(): void {
    this.modal.open(CompleteComponent);
  }
}

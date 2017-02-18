import { Component } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  constructor(private modal: ModalService) { }

  close() {
    this.modal.close();
  }
}

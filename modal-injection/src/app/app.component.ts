import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { CompleteComponent, COMPLETE_TEXT_TOKEN } from './complete/complete.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modal: ModalService) {}

  register(): void {
    const provider = { provide: COMPLETE_TEXT_TOKEN, useValue: '登録が完了しました' };
    this.modal.open(CompleteComponent, provider);
  }

  send(): void {
    const provider = { provide: COMPLETE_TEXT_TOKEN, useValue: '送信が完了しました' };
    this.modal.open(CompleteComponent, provider);
  }
}

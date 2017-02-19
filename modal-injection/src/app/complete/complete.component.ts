import { Component, OpaqueToken, Inject } from '@angular/core';

export const COMPLETE_TEXT_TOKEN = new OpaqueToken('complete.text');

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent {
  public text: string;

  constructor(@Inject(COMPLETE_TEXT_TOKEN) t: string) {
    this.text = t;
  }
}

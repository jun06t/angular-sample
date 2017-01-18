import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [ DataService ]
})
export class ParentComponent implements OnInit {
  private msg: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.toParentData$.subscribe(
      msg => {
        this.msg = msg;
      });
  }

  sendMessage() {
    this.dataService.sendMsgToChild('Hello Child!');
  }

  resetMessage() {
    this.dataService.sendMsgToChild('');
  }
}

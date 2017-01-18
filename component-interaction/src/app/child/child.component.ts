import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  private msg: string;
  private subscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.toChildData$.subscribe(
      msg => {
        this.msg = msg;
      });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  sendMessage() {
    this.dataService.sendMsgToParent('Hello Parent!');
  }

  resetMessage() {
    this.dataService.sendMsgToParent('');
  }
}

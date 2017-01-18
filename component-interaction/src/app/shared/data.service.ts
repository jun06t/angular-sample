import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {

  constructor() { }

  private toParentDataSource = new Subject<string>();
  private toChildDataSource = new Subject<string>();

  // Observable streams
  public toParentData$= this.toParentDataSource.asObservable();
  public toChildData$= this.toChildDataSource.asObservable();

  // Service message commands
  sendMsgToParent(msg: string) {
    this.toParentDataSource.next(msg);
  }

  sendMsgToChild(msg: string) {
    this.toChildDataSource.next(msg);
  }
}

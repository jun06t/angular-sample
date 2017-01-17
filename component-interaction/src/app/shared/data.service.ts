import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

export class User {
  name: string;
  age: number;
}

@Injectable()
export class DataService {

  constructor() { }

  private dataSource = new Subject<User>();
  // Observable streams
  data$ = this.dataSource.asObservable();

  // Service message commands
  setData(user: User) {
    this.dataSource.next(user);
  }
}

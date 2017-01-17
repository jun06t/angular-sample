import { Component, Input, OnInit } from '@angular/core';
import { User, DataService } from '../shared/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private user: User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.data$.subscribe(
      user => {
        this.user = user;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { User, DataService } from '../shared/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [ DataService ]
})
export class ParentComponent implements OnInit {
  private user: User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.data$.subscribe(
      user => {
        this.user = user;
      });
  }
}

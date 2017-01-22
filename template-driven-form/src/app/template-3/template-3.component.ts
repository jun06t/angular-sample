import { Component, OnInit } from '@angular/core';

class User {
  first: string;
  last: string;
}

@Component({
  selector: 'app-template-3',
  templateUrl: './template-3.component.html',
  styleUrls: ['./template-3.component.css']
})
export class Template3Component implements OnInit {
  public user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  loginForm() {
    console.log(this.user);
  }
}

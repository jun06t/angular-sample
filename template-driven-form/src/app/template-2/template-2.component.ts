import { Component, OnInit } from '@angular/core';

class User {
  first: string;
  last: string;
}

@Component({
  selector: 'app-template-2',
  templateUrl: './template-2.component.html',
  styleUrls: ['./template-2.component.css']
})
export class Template2Component implements OnInit {
  public user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  loginForm(value: any) {
    console.log(value);
  }
}


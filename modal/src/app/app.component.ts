import { Component } from '@angular/core';

import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  componentData = null;

  comp1() {
    this.componentData = Content1Component;
  }

  comp2() {
    this.componentData = Content2Component;
  }
}

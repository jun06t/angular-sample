import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public article = new Article();

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.get('1').subscribe(res => {
      this.article = res;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/of';

import { Article } from './article';

@Injectable()
export class ArticleService {
  private articleSource: BehaviorSubject<Article> = new BehaviorSubject<Article>(new Article());

  constructor(private http: HttpClient) { }

  get(id: string): Observable<Article> {
    const article = this.articleSource.getValue();
    if (Object.keys(article).length !== 0) {
      return Observable.of(article);
    }

    return this.fetch(id);
  }

  fetch(id: string): Observable<Article> {
    return this.http.get<Article>('http://jsonplaceholder.typicode.com/posts/' + id);
  }
}

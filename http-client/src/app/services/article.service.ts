import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Article } from './article';

@Injectable()
export class ArticleService {
  constructor(private http: Http) { }

  get(id: string): Observable<Article> {
    return this.http.get('http://jsonplaceholder.typicode.com/posts/' + id)
      .map(res => res.json())
  }
}

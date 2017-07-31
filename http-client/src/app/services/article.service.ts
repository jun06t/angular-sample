import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Article } from './article';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) { }

  get(id: string): Observable<Article> {
    return this.http.get<Article>('http://jsonplaceholder.typicode.com/posts/' + id);
  }
}

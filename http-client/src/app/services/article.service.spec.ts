import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ArticleService } from './article.service';
import { Article } from './article';

describe('ArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArticleService,
      ],
      imports: [
        HttpClientTestingModule,
      ]
    });
  });

  describe('#get', () => {
    const mockResponse: Article = {
      id: 0,
      userId: 1,
      title: 'mock title',
      body: 'mock body',
    };

    it('should get article', inject([ArticleService, HttpTestingController], (service, httpMock) => {
      service.get('0').subscribe((resp: Article) => {
        expect(resp.id).toBe(0);
        expect(resp.userId).toBe(1);
        expect(resp.title).toBe('mock title');
        expect(resp.body).toBe('mock body');
      });

      const req = httpMock.expectOne('http://jsonplaceholder.typicode.com/posts/0');
      expect(req.request.method).toEqual('GET');

      req.flush(mockResponse);
      httpMock.verify();
    }));
  });
});

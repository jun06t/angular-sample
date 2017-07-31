import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, Request, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ArticleService } from './article.service';
import { Article } from './article';

describe('ArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArticleService,
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions
      ]
    });
  });

  describe('#get', () => {
    const mockResponse: Article = {
      id: 0,
      userId: 1,
      title: 'mock title',
      body: 'mock body',
    }

    it('should get article', inject([ArticleService, MockBackend], (service, mockBackend) => {
      let req: Request;
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
        req = connection.request;
      });

      service.get('0').subscribe((resp: Article) => {
        expect(req.url).toBe('http://jsonplaceholder.typicode.com/posts/0');
        expect(req.method).toBe(RequestMethod.Get);

        expect(resp.id).toBe(0);
        expect(resp.userId).toBe(1);
        expect(resp.title).toBe('mock title');
        expect(resp.body).toBe('mock body');
      });
    }));
  });
});

import { HttpClientPage } from './app.po';

describe('http-client App', () => {
  let page: HttpClientPage;

  beforeEach(() => {
    page = new HttpClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

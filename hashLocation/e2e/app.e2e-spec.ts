import { HashLocationPage } from './app.po';

describe('hash-location App', function() {
  let page: HashLocationPage;

  beforeEach(() => {
    page = new HashLocationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

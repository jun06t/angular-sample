import { MaterialPage } from './app.po';

describe('material App', () => {
  let page: MaterialPage;

  beforeEach(() => {
    page = new MaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

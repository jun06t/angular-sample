import { ValidatorPage } from './app.po';

describe('validator App', function() {
  let page: ValidatorPage;

  beforeEach(() => {
    page = new ValidatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ComponentInteractionPage } from './app.po';

describe('component-interaction App', function() {
  let page: ComponentInteractionPage;

  beforeEach(() => {
    page = new ComponentInteractionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

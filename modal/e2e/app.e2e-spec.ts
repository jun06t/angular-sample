import { ModalPage } from './app.po';

describe('modal App', function() {
  let page: ModalPage;

  beforeEach(() => {
    page = new ModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

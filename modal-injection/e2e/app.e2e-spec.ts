import { ModalBasicPage } from './app.po';

describe('modal-basic App', () => {
  let page: ModalBasicPage;

  beforeEach(() => {
    page = new ModalBasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

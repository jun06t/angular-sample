import { ModelDrivenFormPage } from './app.po';

describe('model-driven-form App', function() {
  let page: ModelDrivenFormPage;

  beforeEach(() => {
    page = new ModelDrivenFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

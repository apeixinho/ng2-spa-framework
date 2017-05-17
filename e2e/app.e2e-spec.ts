import { Ng2SpaFrameworkPage } from './app.po';

describe('ng2-spa-framework App', () => {
  let page: Ng2SpaFrameworkPage;

  beforeEach(() => {
    page = new Ng2SpaFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

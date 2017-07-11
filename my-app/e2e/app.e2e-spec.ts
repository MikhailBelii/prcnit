import { PrcnitPage } from './app.po';

describe('prcnit App', () => {
  let page: PrcnitPage;

  beforeEach(() => {
    page = new PrcnitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

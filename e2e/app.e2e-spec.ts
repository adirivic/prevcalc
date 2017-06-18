import { PrevcalcPage } from './app.po';

describe('prevcalc App', () => {
  let page: PrevcalcPage;

  beforeEach(() => {
    page = new PrevcalcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

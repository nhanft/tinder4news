import { Tinder4newsPage } from './app.po';

describe('tinder4news App', () => {
  let page: Tinder4newsPage;

  beforeEach(() => {
    page = new Tinder4newsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

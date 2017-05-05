import { MsqgPage } from './app.po';

describe('msqg App', () => {
  let page: MsqgPage;

  beforeEach(() => {
    page = new MsqgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

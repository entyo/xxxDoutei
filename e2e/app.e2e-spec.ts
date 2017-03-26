import { YubidakePage } from './app.po';

describe('yubidake App', function() {
  let page: YubidakePage;

  beforeEach(() => {
    page = new YubidakePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

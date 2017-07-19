import { NG2Page } from './app.po';

describe('ng2 App', function() {
  let page: NG2Page;

  beforeEach(() => {
    page = new NG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

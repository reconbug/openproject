import { AppPage } from './app.po';

describe('cli-with-ng1 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).to.equal('Welcome to app!');
  });
});

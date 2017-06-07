import { MorningCoffeePage } from './app.po';

describe('morning-coffee App', () => {
  let page: MorningCoffeePage;

  beforeEach(() => {
    page = new MorningCoffeePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

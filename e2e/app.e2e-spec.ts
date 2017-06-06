import { AbracadabraPage } from './app.po';

describe('abracadabra App', () => {
  let page: AbracadabraPage;

  beforeEach(() => {
    page = new AbracadabraPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

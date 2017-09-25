import { EducatodosPage } from './app.po';

describe('educatodos App', () => {
  let page: EducatodosPage;

  beforeEach(() => {
    page = new EducatodosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

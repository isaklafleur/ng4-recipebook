import { Ng4RecipebookPage } from './app.po';

describe('ng4-recipebook App', () => {
  let page: Ng4RecipebookPage;

  beforeEach(() => {
    page = new Ng4RecipebookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

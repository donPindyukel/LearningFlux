import { PartyPlannerPage } from './app.po';

describe('party-planner App', () => {
  let page: PartyPlannerPage;

  beforeEach(() => {
    page = new PartyPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

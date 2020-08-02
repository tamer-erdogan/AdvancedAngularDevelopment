import { getGreeting } from '../support/app.po';

describe('ng-demo-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ng-demo-ui!');
  });
});

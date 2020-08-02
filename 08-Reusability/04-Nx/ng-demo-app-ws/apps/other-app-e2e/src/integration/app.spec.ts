import { getGreeting } from '../support/app.po';

describe('other-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to other-app!');
  });
});

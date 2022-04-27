import { cy, describe, it } from 'local-cypress';

describe('<App /> end to end', () => {
  it('user can visit root route and find starter text', () => {
    cy.visit('/');
    cy.findByRole('heading', { name: /start here/i }).should('exist');
    cy.findByRole('heading', { name: /start here/i }).should('be.visible');
    cy.findByRole('heading', { name: /start here/i }).should('contain', 'Start here');
  });
});

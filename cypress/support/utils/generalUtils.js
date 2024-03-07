export function login() {
  // Navigate to the OrangeHRM Login page
  cy.visit(Cypress.env('login_url'));

  // Log into OrangeHRM
  cy.get('[name="username"]').type(Cypress.env('login_username'));
  cy.get('[name="password"]').type(Cypress.env('login_pw'));
  cy.get('[type="submit"]').click();

  // Assert the Dashboard page is displayed
  cy.contains('Dashboard');
};
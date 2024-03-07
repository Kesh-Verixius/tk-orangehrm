export function addEmployee() {
  cy.contains('PIM').click();
  cy.contains('h6', 'PIM');
  cy.contains('button', ' Add ').click();
  cy.contains('h6', 'Add Employee');
  cy.get('[name="firstName"]').type('New Employee FN');
  cy.get('[name="middleName"]').type('New Employee MN');
  cy.get('[name="lastName"]').type('New Employee LN');
  cy.get('.oxd-input.oxd-input--active').eq(3).clear();
  cy.get('.oxd-input.oxd-input--focus').type('1234');
  cy.get('.oxd-switch-input').click();
  cy.get('.oxd-input.oxd-input--active').eq(5).type('New Employee UN');
  cy.get('.oxd-input.oxd-input--active').eq(5).type('abc123!@#');
  cy.get('.oxd-input.oxd-input--active').eq(6).type('abc123!@#');
  cy.get('[type="submit"]').click();
  // cy.get('.oxd-text--toast-message').should('be.visible');
  // cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text', 'New Employee FN New Employee LN');
};

export function deleteEmployee(employeeId) {
};
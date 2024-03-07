export function addEmployee() {
  // Navigate to the PIM page and assert successful navigation
  cy.get('[class="oxd-main-menu-item-wrapper"]').eq(1).click();
  cy.url().should('include', '/pim/viewEmployeeList');

  // Navigate to the Add Employee page and assert successful navigation
  cy.get('[class="oxd-topbar-body-nav-tab"]').eq(0).click();
  cy.url().should('include', '/pim/addEmployee');

  // Fill in required fields
  cy.get('[name="firstName"]').type('New Employee FN');
  cy.get('[name="middleName"]').type('New Employee MN');
  cy.get('[name="lastName"]').type('New Employee LN');
  cy.get('.oxd-input.oxd-input--active').eq(3).clear();
  cy.get('.oxd-input.oxd-input--focus').type('1234');

  // Enable Login Details creation
  cy.get('.oxd-switch-input').click();

  // Add Login Details
  cy.get('.oxd-input.oxd-input--active').eq(5).type('New Employee UN');
  cy.get('.oxd-input.oxd-input--active').eq(5).type('abc123!@#');
  cy.get('.oxd-input.oxd-input--active').eq(6).type('abc123!@#');

  // Save the new Employee and assert successful save
  cy.get('[type="submit"]').click();
  cy.contains('Successfully Saved');

  // Assert the new Employee Details page is displayed
  cy.contains('New Employee FN New Employee LN');
};

export function deleteEmployee(employeeId) {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  cy.get('.oxd-input.oxd-input--active').eq(1).type(`${employeeId}{enter}`);
  cy.get('[class="oxd-icon bi-trash"]').filter(':visible').click();
  cy.contains('Successfully Deleted');
};
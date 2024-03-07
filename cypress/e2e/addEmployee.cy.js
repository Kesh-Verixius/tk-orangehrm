import { login } from "../support/utils/generalUtils";
import { addEmployee, deleteEmployee } from "../support/utils/employeeUtils";

describe('Add Employee tests', () => {

  before(() => {
    // Log in before tests are run
    login();
  });

  it('Creates a new Employee', () => {
    // Create a new Employee
    addEmployee();

    // Clean up test data by deleting creating Employee
    deleteEmployee('1234');
  })
})
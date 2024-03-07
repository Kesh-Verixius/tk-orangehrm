import { login } from "../support/utils/generalUtils";
import { addEmployee, deleteEmployee } from "../support/utils/employeeUtils";

describe('Add Employee tests', () => {

  before(() => {
    // Log in before tests are run
    login();
  });

  it('Creates a new Employee', () => {
    //addEmployee();
    deleteEmployee('1234');
  })
})
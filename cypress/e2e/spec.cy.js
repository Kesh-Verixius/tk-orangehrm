import { login } from "../support/utils/generalUtils";
import { addEmployee } from "../support/utils/employeeUtils";

describe('Add Employee tests', () => {

  before(() => {
    // log in before tests are run
    login();
  });

  it('Creates a new Employee', () => {
    addEmployee();
  })
})
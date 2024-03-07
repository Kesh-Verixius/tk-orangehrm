# TK OrangeHRM Test Suite

This repository contains the test suite made by Tristin Knapp for the technical interview with Safeguard Global. The request was for a test suite to be made for the OrangeHRM application. More specifically, a single module was to have tests written against it. I've chosen to write tests against the Add Employee workflow.

## Running Cypress Tests Locally

This repository contains Cypress tests written in JavaScript.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/) installed on your machine.
- [Cypress](https://www.cypress.io/) installed globally (`npm install -g cypress`).

## Clone the Repository

To clone this repository to your local machine, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to store the project.
3. Run the following command:

```bash
git clone https://github.com/Kesh-Verixius/tk-orangehrm-tests
```

## Install Dependencies

Once you have cloned the repository, navigate into the project directory in your terminal and install the dependencies by running:

```bash
npm install
```

## Run Cypress Tests

After installing the dependencies, you can run Cypress tests using the following command:

```bash
npx cypress open
```

This command will open the Cypress Test Runner, where you can select and run your tests interactively.

Alternatively, you can run Cypress tests in headless mode using the following command:

```bash
npx cypress run
```

Cypress will execute all tests in headless mode and generate reports.

# Future Enhancements

Below are a list of enhancements I would like to make to the suite, given the time:
* Handle text fields more elegantly
  * Text fields on certain pages modify their class using "active" and "focus". This can cause issues when selecting a specific text field by their class since their class names (and therefore index) change depending on whether or not the cursor is in the text field. Ideally, I'd have a better way of selecting between text fields besides index.

* Integrate CI into the suite
  * I think I'd misheard when talking to Johnny about your CI solution and had written down "Bucket CI", which doesn't seem to be a thing. If I had more time, I would've used BitBucket instead of GitHub, as I'm sure that's what he said in retrospect.

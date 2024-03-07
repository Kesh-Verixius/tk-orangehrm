const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    login_username: 'USERNAME',
    login_pw: 'PASSWORD',
    login_url: 'URL',
  }
});
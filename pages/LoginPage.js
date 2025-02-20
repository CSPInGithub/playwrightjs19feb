import { loginLocators } from "../pagelocators/loginlocator";   

export class LoginPage {

    constructor(page) {
      this.page = page;
      this.usernameField = page.locator(loginLocators.usernameField);
      this.passwordField = page.locator(loginLocators.passwordField);
      this.loginButton = page.locator(loginLocators.loginButton);
    }
  
    async navigate(url) {
      await this.page.goto(url);
    }
  
    async login(username, password) {
      await this.usernameField.fill(username);
      await this.passwordField.fill(password);
      await this.loginButton.click();
      
    }
    
  }
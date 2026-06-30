import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly url = '/login';

  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;
  private readonly logoutButton: Locator;
  private readonly usernameDisplay: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#userName');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login');
    this.errorMessage = page.locator('#name');
    this.logoutButton = page.locator('#submit[value="Log out"]');
    this.usernameDisplay = page.locator('#userName-value');
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillInput(this.usernameInput, username);
    await this.fillInput(this.passwordInput, password);
    await this.clickElement(this.loginButton);
  }

  async getErrorMessage(): Promise<string> {
    return this.getText(this.errorMessage);
  }

  async isLoggedIn(): Promise<boolean> {
    return this.isVisible(this.logoutButton);
  }

  async getLoggedInUsername(): Promise<string> {
    return this.getText(this.usernameDisplay);
  }

  async logout(): Promise<void> {
    await this.clickElement(this.logoutButton);
  }
}

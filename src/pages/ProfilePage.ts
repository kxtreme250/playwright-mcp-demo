import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProfilePage extends BasePage {
  readonly url = '/profile';

  private readonly usernameLabel: Locator;
  private readonly bookRows: Locator;
  private readonly deleteAccountButton: Locator;
  private readonly deleteAllBooksButton: Locator;
  private readonly goToBookStoreButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameLabel = page.locator('#userName-value');
    this.bookRows = page.locator('.rt-tbody .rt-tr-group .rt-td a');
    this.deleteAccountButton = page.locator('button:has-text("Delete Account")');
    this.deleteAllBooksButton = page.locator('button:has-text("Delete All Books")');
    this.goToBookStoreButton = page.locator('button:has-text("Go To Book Store")');
  }

  async getUsername(): Promise<string> {
    return this.getText(this.usernameLabel);
  }

  async getBookTitles(): Promise<string[]> {
    const titles = await this.bookRows.allTextContents();
    return titles.filter((t) => t.trim().length > 0);
  }

  async deleteAllBooks(): Promise<void> {
    await this.clickElement(this.deleteAllBooksButton);
  }

  async goToBookStore(): Promise<void> {
    await this.clickElement(this.goToBookStoreButton);
  }
}

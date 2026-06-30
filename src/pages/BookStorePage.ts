import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookStorePage extends BasePage {
  readonly url = '/books';

  private readonly searchInput: Locator;
  private readonly bookList: Locator;
  private readonly bookLinks: Locator;
  private readonly noDataMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator('#searchBox');
    this.bookList = page.locator('.rt-tbody');
    this.bookLinks = page.locator('.rt-tbody a');
    this.noDataMessage = page.locator('.rt-noData');
  }

  async searchBook(title: string): Promise<void> {
    await this.fillInput(this.searchInput, title);
  }

  async getBookTitles(): Promise<string[]> {
    const titles = await this.bookLinks.allTextContents();
    return titles.filter((t) => t.trim().length > 0);
  }

  async getBookCount(): Promise<number> {
    return (await this.getBookTitles()).length;
  }

  async clickBook(title: string): Promise<void> {
    await this.page.locator(`a:has-text("${title}")`).click();
  }

  async isNoDataVisible(): Promise<boolean> {
    return this.isVisible(this.noDataMessage);
  }
}

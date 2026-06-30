import { test, expect } from '../../src/fixtures/test-fixtures';

test.describe('Book Store Page', () => {
  test.beforeEach(async ({ bookStorePage }) => {
    await bookStorePage.navigate();
  });

  test('should display list of books', async ({ bookStorePage }) => {
    await bookStorePage.waitForBooksToLoad();
    const bookCount = await bookStorePage.getBookCount();
    expect(bookCount).toBeGreaterThan(0);
  });

  test('should filter books by search', async ({ bookStorePage }) => {
    await bookStorePage.waitForBooksToLoad();
    await bookStorePage.searchBook('JavaScript');
    const titles = await bookStorePage.getBookTitles();
    for (const title of titles) {
      expect(title.toLowerCase()).toContain('javascript');
    }
  });

  test('should show no results for non-existent book', async ({ bookStorePage }) => {
    await bookStorePage.searchBook('NonExistentBookTitle12345');
    const bookCount = await bookStorePage.getBookCount();
    expect(bookCount).toBe(0);
  });

  test('should navigate to book details on click', async ({ bookStorePage, page }) => {
    await bookStorePage.waitForBooksToLoad();
    const titles = await bookStorePage.getBookTitles();
    expect(titles.length).toBeGreaterThan(0);
    await bookStorePage.clickBook(titles[0]);
    await expect(page.locator('#ISBN-wrapper')).toBeVisible();
  });
});

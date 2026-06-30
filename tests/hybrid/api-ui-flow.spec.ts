import { test, expect } from '../../src/fixtures/test-fixtures';

test.describe('API + UI Hybrid Flow', () => {
  test('should verify books from API appear in UI', async ({ bookStoreApi, bookStorePage }) => {
    // Step 1: Get books via API
    const apiResponse = await bookStoreApi.getAllBooks();
    expect(apiResponse.status).toBe(200);
    const apiBookTitles = apiResponse.body.books.map((b) => b.title);

    // Step 2: Navigate to Book Store UI
    await bookStorePage.navigate();
    await bookStorePage.waitForBooksToLoad();
    const uiBookTitles = await bookStorePage.getBookTitles();

    // Step 3: Verify API books are displayed in UI
    for (const title of uiBookTitles) {
      expect(apiBookTitles).toContain(title);
    }
  });

  test('should verify book details match between API and UI', async ({ bookStoreApi, bookStorePage, page }) => {
    const isbn = '9781449325862';

    // Step 1: Get book details via API
    const apiResponse = await bookStoreApi.getBook(isbn);
    expect(apiResponse.status).toBe(200);

    // Step 2: Navigate to book in UI
    await bookStorePage.navigate();
    await bookStorePage.waitForBooksToLoad();
    await bookStorePage.clickBook(apiResponse.body.title);

    // Step 3: Verify details match
    const isbnText = await page.locator('#ISBN-wrapper .col-md-9:last-child').textContent();
    expect(isbnText?.trim()).toBe(isbn);
  });

  test('should search for API-fetched book title in UI', async ({ bookStoreApi, bookStorePage }) => {
    // Step 1: Get a book title from API
    const apiResponse = await bookStoreApi.getAllBooks();
    const firstBook = apiResponse.body.books[0];

    // Step 2: Search for it in UI
    await bookStorePage.navigate();
    await bookStorePage.waitForBooksToLoad();
    await bookStorePage.searchBook(firstBook.title);

    // Step 3: Verify it appears
    const titles = await bookStorePage.getBookTitles();
    expect(titles).toContain(firstBook.title);
  });
});

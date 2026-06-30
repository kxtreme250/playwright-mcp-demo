import { test, expect } from '../../src/fixtures/test-fixtures';

test.describe('BookStore API', () => {
  test('should return list of books', async ({ bookStoreApi }) => {
    const response = await bookStoreApi.getAllBooks();
    expect(response.status).toBe(200);
    expect(response.body.books).toBeDefined();
    expect(response.body.books.length).toBeGreaterThan(0);
  });

  test('should return book details by ISBN', async ({ bookStoreApi }) => {
    const isbn = '9781449325862'; // Git Pocket Guide
    const response = await bookStoreApi.getBook(isbn);
    expect(response.status).toBe(200);
    expect(response.body.isbn).toBe(isbn);
    expect(response.body.title).toBeTruthy();
    expect(response.body.author).toBeTruthy();
  });

  test('should return error for invalid ISBN', async ({ bookStoreApi }) => {
    const response = await bookStoreApi.getBook('0000000000000');
    expect(response.status).toBe(400);
  });

  test('each book should have required fields', async ({ bookStoreApi }) => {
    const response = await bookStoreApi.getAllBooks();
    for (const book of response.body.books) {
      expect(book.isbn).toBeTruthy();
      expect(book.title).toBeTruthy();
      expect(book.author).toBeTruthy();
      expect(book.pages).toBeGreaterThan(0);
    }
  });
});

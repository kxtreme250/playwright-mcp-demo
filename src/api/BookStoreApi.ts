import { ApiClient, ApiResponse } from './ApiClient';

export interface Book {
  isbn: string;
  title: string;
  subTitle: string;
  author: string;
  publish_date: string;
  publisher: string;
  pages: number;
  description: string;
  website: string;
}

export interface BooksResponse {
  books: Book[];
}

export interface AddBooksRequest {
  userId: string;
  collectionOfIsbns: { isbn: string }[];
}

export class BookStoreApi extends ApiClient {
  async getAllBooks(): Promise<ApiResponse<BooksResponse>> {
    return this.get<BooksResponse>('/BookStore/v1/Books');
  }

  async getBook(isbn: string): Promise<ApiResponse<Book>> {
    return this.get<Book>(`/BookStore/v1/Book?ISBN=${isbn}`);
  }

  async addBooksToUser(
    userId: string,
    isbns: string[],
    token: string,
  ): Promise<ApiResponse<{ books: { isbn: string }[] }>> {
    const payload: AddBooksRequest = {
      userId,
      collectionOfIsbns: isbns.map((isbn) => ({ isbn })),
    };
    return this.post('/BookStore/v1/Books', payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async deleteBookFromUser(userId: string, isbn: string, token: string): Promise<ApiResponse<void>> {
    return this.delete<void>('/BookStore/v1/Book', {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async deleteAllBooksFromUser(userId: string, token: string): Promise<ApiResponse<void>> {
    return this.delete<void>(`/BookStore/v1/Books?UserId=${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

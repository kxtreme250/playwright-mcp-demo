import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BookStorePage } from '../pages/BookStorePage';
import { ProfilePage } from '../pages/ProfilePage';
import { AccountApi } from '../api/AccountApi';
import { BookStoreApi } from '../api/BookStoreApi';

type PageFixtures = {
  loginPage: LoginPage;
  bookStorePage: BookStorePage;
  profilePage: ProfilePage;
};

type ApiFixtures = {
  accountApi: AccountApi;
  bookStoreApi: BookStoreApi;
};

export const test = base.extend<PageFixtures & ApiFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  bookStorePage: async ({ page }, use) => {
    await use(new BookStorePage(page));
  },

  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },

  accountApi: async ({ request }, use) => {
    const baseUrl = process.env.API_BASE_URL || 'https://demoqa.com';
    await use(new AccountApi(request, baseUrl));
  },

  bookStoreApi: async ({ request }, use) => {
    const baseUrl = process.env.API_BASE_URL || 'https://demoqa.com';
    await use(new BookStoreApi(request, baseUrl));
  },
});

export { expect } from '@playwright/test';

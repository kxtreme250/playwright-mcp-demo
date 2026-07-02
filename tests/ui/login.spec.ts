import { test, expect } from '../../src/fixtures/test-fixtures';

test.describe('Login Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test('should display login form', async ({ loginPage }) => {
    const isVisible = await loginPage.isLoginFormVisible();
    expect(isVisible).toBe(true);
  });

  test('should show error for invalid credentials', async ({ loginPage }) => {
    await loginPage.login('invaliduser', 'invalidpass');
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toBeTruthy();
  });

  test('should navigate to registration page', async ({ loginPage, page }) => {
    await loginPage.clickNewUser();
    await expect(page).toHaveURL(/.*register/);
  });
});

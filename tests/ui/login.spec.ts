import { test, expect } from '../../src/fixtures/test-fixtures';

test.describe('Login Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test('should display login form', async ({ page }) => {
    await expect(page.locator('#userName')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login')).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ loginPage }) => {
    await loginPage.login('invaliduser', 'invalidpass');
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toBeTruthy();
  });

  test('should navigate to registration page', async ({ page }) => {
    await page.locator('#newUser').click();
    await expect(page).toHaveURL(/.*register/);
  });
});

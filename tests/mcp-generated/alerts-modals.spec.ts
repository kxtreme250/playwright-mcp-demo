/**
 * MCP-Generated Test: Alerts, Confirms & Prompts
 *
 * Prompt: "Test all alert types on demoqa.com/alerts — standard alert,
 *          timed alert, confirm box (accept and dismiss), and prompt box.
 *          Also test the modal dialogs on demoqa.com/modal-dialogs."
 *
 * Generated via Playwright MCP Server + Claude AI
 */
import { test, expect } from '@playwright/test';

test.describe('Alerts — MCP Generated', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/alerts');
  });

  test('should handle standard alert', async ({ page }) => {
    page.on('dialog', (dialog) => dialog.accept());
    await page.locator('#alertButton').click();
  });

  test('should handle timed alert', async ({ page }) => {
    const dialogPromise = page.waitForEvent('dialog');
    await page.locator('#timerAlertButton').click();

    const dialog = await dialogPromise;
    expect(dialog.message()).toContain('appeared after 5 seconds');
    await dialog.accept();
  });

  test('should accept confirm box', async ({ page }) => {
    page.on('dialog', (dialog) => dialog.accept());
    await page.locator('#confirmButton').click();

    await expect(page.locator('#confirmResult')).toHaveText('You selected Ok');
  });

  test('should dismiss confirm box', async ({ page }) => {
    page.on('dialog', (dialog) => dialog.dismiss());
    await page.locator('#confirmButton').click();

    await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
  });

  test('should enter text in prompt box', async ({ page }) => {
    page.on('dialog', (dialog) => dialog.accept('Playwright MCP'));
    await page.locator('#promtButton').click();

    await expect(page.locator('#promptResult')).toContainText('Playwright MCP');
  });
});

test.describe('Modal Dialogs — MCP Generated', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/modal-dialogs');
  });

  test('should open and close small modal', async ({ page }) => {
    await page.locator('#showSmallModal').click();

    const modal = page.locator('.modal-content');
    await expect(modal).toBeVisible();
    await expect(modal.locator('.modal-body')).toContainText('small modal');

    await page.locator('#closeSmallModal').click();
    await expect(modal).not.toBeVisible();
  });

  test('should open and close large modal', async ({ page }) => {
    await page.locator('#showLargeModal').click();

    const modal = page.locator('.modal-content');
    await expect(modal).toBeVisible();
    await expect(modal.locator('.modal-body')).not.toBeEmpty();

    await page.locator('#closeLargeModal').click();
    await expect(modal).not.toBeVisible();
  });
});

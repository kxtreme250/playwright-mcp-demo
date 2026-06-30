/**
 * MCP-Generated Test: Button Click Interactions
 *
 * Prompt: "Go to demoqa.com/buttons and test all three button types:
 *          double click, right click, and standard click. Verify each
 *          displays the correct confirmation message."
 *
 * Generated via Playwright MCP Server + Claude AI
 */
import { test, expect } from '@playwright/test';

test.describe('Buttons Page — MCP Generated', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/buttons');
  });

  test('should handle double click', async ({ page }) => {
    await page.locator('#doubleClickBtn').dblclick();

    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');
  });

  test('should handle right click', async ({ page }) => {
    await page.locator('#rightClickBtn').click({ button: 'right' });

    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click');
  });

  test('should handle dynamic id click', async ({ page }) => {
    // The third button has a dynamic id — locate by text
    await page.getByRole('button', { name: 'Click Me', exact: true }).click();

    await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click');
  });
});

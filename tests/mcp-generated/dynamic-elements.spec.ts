/**
 * MCP-Generated Test: Dynamic Elements & Waits
 *
 * Prompt: "Test the dynamic properties page at demoqa.com/dynamic-properties.
 *          Verify the button that becomes enabled after 5 seconds, the button
 *          that changes color, and the button that appears after 5 seconds."
 *
 * Generated via Playwright MCP Server + Claude AI
 */
import { test, expect } from '@playwright/test';

test.describe('Dynamic Properties — MCP Generated', () => {
  test('should enable button after delay', async ({ page }) => {
    await page.goto('/dynamic-properties');

    const enableAfterBtn = page.locator('#enableAfter');

    // Button starts disabled
    await expect(enableAfterBtn).toBeDisabled();

    // Wait for it to become enabled (5 second delay on the page)
    await expect(enableAfterBtn).toBeEnabled({ timeout: 10_000 });
  });

  test('should change button color after delay', async ({ page }) => {
    await page.goto('/dynamic-properties');

    const colorChangeBtn = page.locator('#colorChange');

    // Wait for the color change class to be applied
    await expect(colorChangeBtn).toHaveClass(/text-danger/, { timeout: 10_000 });
  });

  test('should make button visible after delay', async ({ page }) => {
    await page.goto('/dynamic-properties');

    const visibleAfterBtn = page.locator('#visibleAfter');

    // Wait for it to appear (starts hidden, becomes visible after ~5s)
    await expect(visibleAfterBtn).toBeVisible({ timeout: 15_000 });
  });
});

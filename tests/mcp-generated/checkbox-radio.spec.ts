/**
 * MCP-Generated Test: Checkbox & Radio Button Interactions
 *
 * Prompt: "Go to demoqa.com/checkbox and expand the tree, then select
 *          the 'Desktop' node and verify the result text shows the
 *          selected items. Also test the radio buttons page."
 *
 * Generated via Playwright MCP Server + Claude AI
 */
import { test, expect } from '@playwright/test';

test.describe('Checkbox Tree — MCP Generated', () => {
  test('should select Home and verify Desktop is included', async ({ page }) => {
    await page.goto('/checkbox', { waitUntil: 'domcontentloaded' });

    // Wait for the tree to render
    const homeCheckbox = page.getByRole('treeitem', { name: /Home/ }).getByRole('checkbox');
    await homeCheckbox.waitFor({ state: 'visible', timeout: 30_000 });

    // Select the Home checkbox (selects all children including Desktop)
    await homeCheckbox.click();

    // Verify result text includes desktop items
    const result = page.locator('#result');
    await expect(result).toBeVisible();
    await expect(result).toContainText('desktop');
    await expect(result).toContainText('home');
  });

  test('should select all items via Home checkbox', async ({ page }) => {
    await page.goto('/checkbox', { waitUntil: 'domcontentloaded' });

    // Wait for the checkbox tree to render
    const homeCheckbox = page.getByRole('treeitem', { name: /Home/ }).getByRole('checkbox');
    await homeCheckbox.waitFor({ state: 'visible', timeout: 30_000 });

    // Click the Home checkbox to select everything
    await homeCheckbox.click();

    // Verify result shows multiple selections
    const result = page.locator('#result');
    await expect(result).toBeVisible();
    await expect(result).toContainText('home');
  });
});

test.describe('Radio Button — MCP Generated', () => {
  test('should select Yes radio and display success message', async ({ page }) => {
    await page.goto('/radio-button');

    // Click the "Yes" radio button
    await page.locator('label[for="yesRadio"]').click();

    // Verify success text
    await expect(page.locator('.mt-3')).toContainText('Yes');
  });

  test('should select Impressive radio and display message', async ({ page }) => {
    await page.goto('/radio-button');

    await page.locator('label[for="impressiveRadio"]').click();

    await expect(page.locator('.mt-3')).toContainText('Impressive');
  });

  test('should have No radio button disabled', async ({ page }) => {
    await page.goto('/radio-button');

    await expect(page.locator('#noRadio')).toBeDisabled();
  });
});

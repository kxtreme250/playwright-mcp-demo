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
  test('should expand tree and select Desktop node', async ({ page }) => {
    await page.goto('/checkbox');

    // Expand the Home node
    await page.locator('.rct-collapse-btn').first().click();

    // Expand the Desktop node
    await page.locator('label[for="tree-node-desktop"]').locator('..').locator('.rct-collapse-btn').click();

    // Select the Desktop checkbox
    await page.locator('label[for="tree-node-desktop"]').click();

    // Verify result text shows selected items
    const result = page.locator('#result');
    await expect(result).toBeVisible();
    await expect(result).toContainText('desktop');
  });

  test('should select all items via Home checkbox', async ({ page }) => {
    await page.goto('/checkbox');

    // Click the Home checkbox to select everything
    await page.locator('label[for="tree-node-home"]').click();

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

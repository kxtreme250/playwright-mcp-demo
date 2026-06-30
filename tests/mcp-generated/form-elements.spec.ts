/**
 * MCP-Generated Test: Form Elements
 *
 * Prompt: "Navigate to demoqa.com/text-box and test the text box form.
 *          Fill in full name, email, current address, and permanent address,
 *          then submit and verify the output displays the entered values."
 *
 * Generated via Playwright MCP Server + Claude AI
 */
import { test, expect } from '@playwright/test';

test.describe('Text Box Form — MCP Generated', () => {
  test('should submit text box form and display output', async ({ page }) => {
    await page.goto('/text-box');

    // Fill in form fields
    await page.getByPlaceholder('Full Name').fill('Jane Doe');
    await page.getByPlaceholder('name@example.com').fill('jane.doe@example.com');
    await page.locator('#currentAddress').fill('123 Main St, Springfield');
    await page.locator('#permanentAddress').fill('456 Oak Ave, Shelbyville');

    // Submit the form
    await page.locator('#submit').click();

    // Verify output section appears with correct values
    const output = page.locator('#output');
    await expect(output).toBeVisible();
    await expect(output.locator('#name')).toContainText('Jane Doe');
    await expect(output.locator('#email')).toContainText('jane.doe@example.com');
    await expect(output.locator('#currentAddress')).toContainText('123 Main St, Springfield');
    await expect(output.locator('#permanentAddress')).toContainText('456 Oak Ave, Shelbyville');
  });

  test('should not submit with invalid email', async ({ page }) => {
    await page.goto('/text-box');

    await page.getByPlaceholder('Full Name').fill('John Smith');
    await page.getByPlaceholder('name@example.com').fill('not-an-email');
    await page.locator('#submit').click();

    // Email field should show error styling
    await expect(page.locator('#userEmail')).toHaveClass(/field-error/);
  });
});

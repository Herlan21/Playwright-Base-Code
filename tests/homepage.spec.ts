import { expect, test } from '@playwright/test';

test('homepage opens successfully', async ({ page }) => {
  const response = await page.goto('/');

  if (!response) {
    throw new Error('Homepage navigation did not return an HTTP response');
  }

  expect(response.ok(), `Homepage returned HTTP ${response.status()}`).toBeTruthy();
  await expect(page).toHaveTitle(/\S/);
});

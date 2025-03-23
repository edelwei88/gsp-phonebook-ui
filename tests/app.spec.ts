import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle('GSP Phonebook');
});

test('has header', async ({ page }) => {
  await expect(page.locator('header')).toBeInViewport();
});

test('has search', async ({ page }) => {
  await expect(page.getByTestId('search')).toBeInViewport();
});

test('has hierarchy', async ({ page }) => {
  await expect(page.getByTestId('hierarchy')).toBeInViewport();
});

test('has table', async ({ page }) => {
  await expect(page.getByTestId('table')).toBeInViewport();
});

test('search input working', async ({ page }) => {
  const search = page.getByTestId('search');
  const input = search.getByRole('searchbox');
  await input.fill('asdf');

  await expect(input).toHaveValue('asdf');
});

test('help button', async ({ page }) => {
  const helpButton = page.locator('button.text-blue-600:nth-child(1)');
  helpButton.click();

  await expect(page.locator('.rounded-xl')).toBeInViewport();
});

test('change theme', async ({ page }) => {
  await page.locator('button.text-blue-600:nth-child(2)').click();

  await expect(page.locator('html')).toHaveClass('light');
});

import { test, expect } from '@playwright/test';

test('navigate blog', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');
  await page.getByRole('button', { name: 'About me' }).click();
  await page.getByRole('button', { name: '<- Back to the list of' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'How To Choose Between' }).first().click();
  const page1 = await page1Promise;
  await page1.getByText('career', { exact: true }).click();
  await page1.getByRole('link', { name: 'Salary-Review-Tips' }).click();
  await page1.goto('https://ilarionhalushka.github.io/');
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Soft Skills of Senior Engineer' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('button', { name: 'Home' }).click();
  await page2.getByRole('heading', { name: 'IT Blog by I' }).click();
});
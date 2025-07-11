import { test, expect } from '@playwright/test';

test('placing an order', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
  await page.getByRole('link', { name: 'Gerald the Giraffe' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).fill('nina');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@test.com');
  await page.locator('.snipcart-textbox').first().click();
  await page.getByRole('textbox', { name: 'Street address' }).fill('street');
  await page.getByRole('textbox', { name: 'Apt/Suite' }).click();
  await page.getByRole('textbox', { name: 'Apt/Suite' }).fill('12');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('boston');
  await page.locator('.snipcart-typeahead__content > .snipcart-typeahead__select > .snipcart-typeahead__input > .snipcart-form__select-wrapper > .snipcart-textbox').click();
  await page.getByText('Canada').click();
  await page.locator('.snipcart-form__field.snipcart-form__cell--large > .snipcart-typeahead > .snipcart-typeahead__content > .snipcart-typeahead__select > .snipcart-typeahead__input > .snipcart-form__select-wrapper > .snipcart-textbox').click();
  await page.getByText('British Columbia').click();
  await page.getByRole('textbox', { name: 'Postal/ZIP code' }).click();
  await page.getByRole('textbox', { name: 'Postal/ZIP code' }).fill('12345');
  await page.getByRole('button', { name: 'Continue to payment' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Card number' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Card number' }).fill('4242 4242 4242 42424');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'MM/YY' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'MM/YY' }).fill('12/30');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'CVV' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'CVV' }).fill('123');
  await page.getByRole('button', { name: 'Place order' }).click();
  await page.getByRole('heading', { name: 'Thank you for your order' }).click();
  await page.getByRole('button', { name: 'Continue shopping' }).click();
});
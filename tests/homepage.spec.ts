import { test, expect } from '@playwright/test';

test('Assertions on nav', async ({ page }) => {
  await page.goto('https://mgemi.com/');
  await page.getByRole('button', { name: 'Close dialog' }).click();
  await expect(page.locator('#shopify-section-header')).toContainText('Women');
  await expect(page.locator('#shopify-section-header')).toContainText('Handbags');
  await expect(page.locator('#shopify-section-header')).toContainText('Men');
  await expect(page.locator('#shopify-section-header')).toContainText('Sale');
  await expect(page.getByRole('navigation').filter({ hasText: 'Search Icons/20x20/profile@2x' }).getByRole('link').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Icons/20x20/profile@2x' })).toBeVisible();
  await expect(page.getByText('Icons/20x20/bag@2x0')).toBeVisible();
});


test('Validate search functionality', async ({ page }) => {
  await page.goto('https://mgemi.com/');
  await page.getByRole('button', { name: 'Close dialog' }).click();
  await page.getByRole('navigation').filter({ hasText: 'Search Icons/20x20/profile@2x' }).getByRole('link').first().click();
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  await page.getByRole('textbox', { name: 'What are you looking for?' }).click();
  await page.getByRole('textbox', { name: 'What are you looking for?' }).fill('Heels');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('h1')).toContainText('Search results for "Heels"');

});



test('Validate clicks on homepage', async ({ page }) => {
  await page.goto('https://mgemi.com/');
  await page.getByRole('button', { name: 'Close dialog' }).click();
  await page.getByRole('link', { name: 'SHOP THE UNA' }).click();
  await expect(page.locator('h1')).toContainText('The Una');
  await page.goto('https://mgemi.com/');
  await page.getByRole('link', { name: 'BESTSELLERS Handcrafted in' }).click();
  await expect(page.locator('#shopify-section-collection-banner')).toContainText('Women\'s Bestsellers');
  await page.goto('https://mgemi.com/');
  await page.getByRole('link', { name: 'Italy, Always At Norina’s' }).click();
  await expect(page).toHaveURL("https://mgemi.com/pages/artisans");
  await page.goto('https://mgemi.com/');
  await page.getByRole('link', { name: 'SHOP SANDALS' }).click();
  await expect(page.locator('#shopify-section-collection-banner')).toContainText('Women\'s Italian Sandals');
  await page.goto('https://mgemi.com/');
  await expect(page.locator('.cards__block > div > .cards__media > .cards__content-overlay > .cards__content > .cards__btn').first()).toBeVisible();
  await expect(page.locator('div:nth-child(2) > .cards__media > .cards__content-overlay > .cards__content > .cards__btn')).toBeVisible();
  await expect(page.locator('div:nth-child(3) > .cards__media > .cards__content-overlay > .cards__content > .cards__btn')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Enter Email' })).toBeVisible();
});


test('Validate promo bar message', async ({ page }) => {
  await page.goto('https://mgemi.com/');
  await page.getByRole('button', { name: 'Close dialog' }).click();
  await page.locator('#shopify-section-announcement-bar div').nth(1).click();
  await expect(page.locator('#shopify-section-announcement-bar')).toContainText('Free Shipping for Cliente Rewards Members');
});


// test('Validate header links', async ({ page }) => {
//   await page.goto('https://mgemi.com/');
//   await page.getByRole('button', { name: 'Close dialog' }).click();
//   const hoverTarget = page.locator('.hover-target'); 
//   await hoverTarget.hover();
//   await page.getByRole('link', { name: 'Shop All Shoes' }).click();
//   await expect(page.locator('#shopify-section-collection-banner')).toContainText('Women\'s Italian Shoes');
//   await page.goto('https://mgemi.com/');
//   await page.getByRole('link', { name: 'New Arrivals' }).click();
//   await expect(page.locator('#shopify-section-collection-banner')).toContainText('Women\'s New Arrivals');
//   await page.goto('https://mgemi.com/');
//   await page.getByRole('link', { name: 'Bestsellers', exact: true }).click();
//   await expect(page.locator('#shopify-section-collection-banner')).toContainText('Women\'s Bestsellers');
//   await page.goto('https://mgemi.com/');
//   await page.getByRole('link', { name: 'Essentials' }).click();
//   await page.goto('https://mgemi.com/');
//   await page.getByRole('link', { name: 'The Event Edit' }).click();
//   await expect(page.locator('#shopify-section-collection-banner')).toContainText('The Event Edit');
//   await page.goto('https://mgemi.com/');
//   await page.getByRole('link', { name: 'flats flats' }).click();
//   await expect(page.locator('#shopify-section-collection-banner')).toContainText('Women\'s Italian Flats');
//   await page.goto('https://mgemi.com/');
//   await page.getByRole('link', { name: 'loafers loafers' }).click();
//   await expect(page.locator('#shopify-section-collection-banner')).toContainText('Women\'s Italian Loafers');
//   await page.goto('https://mgemi.com/');
//   await page.getByRole('link', { name: 'drivers drivers' }).click();
//   await expect(page.locator('#shopify-section-collection-banner')).toContainText('Women\'s Italian Drivers');
//   await page.goto('https://mgemi.com/');
//   await page.getByRole('link', { name: 'heels heels' }).click();
//   await expect(page.locator('#shopify-section-collection-banner')).toContainText('Women\'s Italian Heels');
//   await page.getByRole('link', { name: 'sneakers sneakers' }).click();
//   await expect(page.locator('#shopify-section-collection-banner')).toContainText('Women\'s Italian Sneakers');
//   await page.goto('https://mgemi.com/collections/womens-heels');
//   await page.getByRole('link', { name: 'sandals sandals' }).click();
//   await expect(page.locator('#shopify-section-collection-banner')).toContainText('Women\'s Italian Sandals');
//   await page.goto('https://mgemi.com/collections/womens-heels');
//   await page.getByRole('link', { name: 'handbags handbags' }).click();
//   await expect(page.locator('#shopify-section-collection-banner')).toContainText('Women\'s Italian Handbags');
// });
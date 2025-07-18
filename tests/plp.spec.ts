import { test, expect } from '@playwright/test';

test('Validate filters', async ({ page }) => {
    test.setTimeout(60_000);
    await page.goto('https://mgemi.com/collections/womens-italian-shoes');
    await page.waitForTimeout(2000); // wait for 5 seconds
    await page.getByRole('button', { name: 'Close dialog' }).click();
    await page.waitForTimeout(5000); // wait for 5 seconds

    await page.locator('//div[contains(@class, "desktop-filter__prompt") and normalize-space(.)="Size"]').click();
    await page.waitForTimeout(5000); // wait for 5 seconds
    await page.getByText('38', { exact: true }).click();
    await page.waitForTimeout(5000); // wait for 5 seconds

    await page.locator('//div[contains(@class, "desktop-filter__prompt") and normalize-space(.)="Heel Height"]').click();
    await page.waitForTimeout(5000); // wait for 5 seconds

    await page.locator('#checkbox-filter-low + .checkbox__box').click();

    await expect(page).toHaveURL("https://mgemi.com/collections/womens-italian-shoes#sizes=38&heelHeightDescriptions=low");
    await expect(page.locator('#shopify-section-collection')).toContainText('38');
    await expect(page.locator('#shopify-section-collection')).toContainText('Low');

}); 

```javascript
import { test, expect } from '@playwright/test';

test('Test the mobile menu button toggles the mobile menu visibility', async ({ page }) => {
  await page.goto('/');

  const mobileMenuButton = await page.locator('#mobile-menu-button');
  const mobileMenu = await page.locator('#mobile-menu');

  // Initially, the mobile menu should be hidden
  await expect(mobileMenu).toBeHidden();

  // Click the mobile menu button
  await mobileMenuButton.click();

  // Now the mobile menu should be visible
  await expect(mobileMenu).toBeVisible();

  // Click the button again
  await mobileMenuButton.click();

  // The mobile menu should be hidden again
  await expect(mobileMenu).toBeHidden();
});
```
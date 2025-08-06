```javascript
import { test, expect } from '@playwright/test';

test('Confirm that clicking a link in the mobile menu hides the menu', async ({ page }) => {
  await page.goto('/');

  await page.locator('#mobile-menu-button').click();

  await page.locator('#mobile-menu a[href="#about"]').click();

  await page.waitForTimeout(500);

  const mobileMenu = await page.$('#mobile-menu');
  const isHidden = await mobileMenu.evaluate(node => node.classList.contains('hidden'));

  expect(isHidden).toBe(true);
});
```

import {test, expect } from '@playwright/test';

test('Guru99 Bank', async ({page}) => {
  await page.goto('https://demo.guru99.com/V4/');
  await page.locator('//input[@name="uid"]').fill('mngr589401');
  await page.locator('//input[@name="password"]').fill('rupUqeg');
  await page.locator('//input[@name="btnLogin"]').click('loginButton');
  await page.waitForURL('https://demo.guru99.com/V4/manager/Managerhomepage.php');
  await expect(page.locator('//marquee[@class="heading3"]'), "Welcome To Manager's Page of Guru99 Bank").toBeVisible();
});

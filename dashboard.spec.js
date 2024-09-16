import {expect} from '@playwright/test'
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://demo.guru99.com/V4/');
  await page.getByLabel('UserID').fill('mngr589401');
  await page.getByLabel('Password').fill('rupUqeg');
  await page.click('loginButton');
  const pageURL = page.url();
  expect(pageURL).toBe('https://demo.guru99.com/V4/manager/Managerhomepage.php');
});
import { test, expect } from '@playwright/test';

let page; // global page

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://demoblaze.com/index.html');
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('//button[normalize-space()="Log in"]').click();
  await page.waitForTimeout(2000);
});

test.afterEach(async () => {
  await page.locator('#logout2').click();
  await page.close();
});

test('Home Page', async () => {
  const products = await page.$$('.hrefch');
  expect(products.length).toBe(9); // check number of products
});

test.only('Add to Cart', async () => {
  await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();

  // listen for alert dialog before clicking
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Product added.');
    await dialog.accept();
  });

  await page.locator('//a[normalize-space()="Add to cart"]').click();
});

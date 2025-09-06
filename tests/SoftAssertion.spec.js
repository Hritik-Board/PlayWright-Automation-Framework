const { test, expect } = require('@playwright/test');

test('verify Demoblaze home page', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

//   await expect(page).toHaveTitle('STORE')

//   await expect(page).toHaveURL('https://demoblaze.com/')

//   await expect(page.locator('.navbar-brand')).toBeVisible()

  await expect.soft(page).toHaveTitle('STORE12')

  await expect.soft(page).toHaveURL('https://demoblaze.com/')

  await expect.soft(page.locator('.navbar-brand')).toBeVisible()



  





});

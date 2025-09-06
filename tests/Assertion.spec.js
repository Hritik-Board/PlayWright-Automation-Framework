const { test, expect } = require('@playwright/test');

test('verify Demoblaze home page', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  const logo = page.locator('.header-logo');  // no await here

  await expect(logo).toBeVisible();

  const searchBox =  page.locator('#small-searchterms')

  await expect(searchBox).toBeEnabled()

  const Mradio =  await page.locator('#gender-male')

  Mradio.click()

  await expect(Mradio).toBeChecked()

  const Mcheck =  page.locator('#Newsletter')
  await expect(Mcheck).toBeChecked()

  const AttEle = await   page.locator('#register-button')
  await expect(AttEle).toHaveAttribute('type','submit')

  await expect(await page.locator('.page-title h1')).toHaveText('Register')

  await expect(await page.locator('.page-title h1')).toContainText('gis')

  const email =  await page.locator('#Email')
  await email.fill('Hri@ex.com')
  expect(email).toHaveValue('Hri@ex.com')
  
  //not existing on the site
  const months =  await page.locator('select[name="DateOfBirthMonth] option')

  await expect(months).toHaveCount(13);





});

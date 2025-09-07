const { expect, test } = require('@playwright/test');

test('Handle autosuggest dropdown', async ({ page }) => {
  await page.goto('https://www.redbus.in/');

  await page.waitForTimeout(3000);

  // Fill into the actual input field
  await page.locator("//input[@id='src']").fill('Delhi');

  // Wait for suggestions to load
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div");

  // Collect all suggestion elements
  const options = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div");

  for (let option of options) {
    const value = await option.textContent();
    // console.log(value.trim());

    if(value.includes('Anand Vihar'))
    {
        await option.click()
        break;
    }
  }

  

  await page.waitForTimeout(5000);
});

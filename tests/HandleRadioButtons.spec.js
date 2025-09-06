const {expect,test} = require('@playwright/test')

test('Handle Radio Button',async ({page})=>{
    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    await page.locator('//input[@value="option2"]').check()

    await expect( await page.locator('//input[@value="option2"]')).toBeChecked()

    await expect( await page.locator('//input[@value="option2"]').isChecked()).toBeTruthy();

    // await page.locator('//input[@value="option1"]').check()

    await expect( await page.locator('//input[@value="option1"]').isChecked()).toBeFalsy()

   

    await page.waitForTimeout(5000)


})
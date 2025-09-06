const {expect,test} = require('@playwright/test')

test('Handle input boxes',async ({page})=>{
    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    await expect(await page.locator('//input[@id="name"]')).toBeVisible()

    await expect(await page.locator('//input[@id="name"]')).toBeEmpty()
    await expect(await page.locator('//input[@id="name"]')).toBeEditable()



   await page.locator('//input[@id="name"]').fill("john")

   

    await page.waitForTimeout(5000)


})
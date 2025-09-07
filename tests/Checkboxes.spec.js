const {expect,test} = require('@playwright/test')

test('Handle checkboxes',async ({page})=>{
    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    await page.locator('//input[@id = "monday" and @type = "checkbox"]').check()

    await expect(await page.locator('//input[@id = "monday" and @type = "checkbox"]')).toBeChecked()
    await expect(await page.locator('//input[@id = "monday" and @type = "checkbox"]').isChecked()).toBeTruthy()
    await expect(await page.locator('//input[@id = "sunday" and @type = "checkbox"]').isChecked()).toBeFalsy()


    const checkboxes  =  [

        '//input[@id = "monday" and @type = "checkbox"]',
        '//input[@id = "sunday" and @type = "checkbox"]',
        '//input[@id = "saturday" and @type = "checkbox"]'
    ];

    for(const locators of checkboxes){
        await page.locator(locators).check();
    }

    await page.waitForTimeout(5000)

    for(const locators of checkboxes){
        if(await page.locator(locators).isChecked())
        {
        await page.locator(locators).uncheck();
    }
    }

    await page.waitForTimeout(5000)







    

   

   


})
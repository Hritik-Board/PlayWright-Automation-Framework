const  {test,expect} =  require('@playwright/test');

test('Single file',async ({page})=>{
  
    await page.goto('https://www.foundit.in/')
    await page.waitForSelector('.mqfihd-upload')

    await page.locator('.mqfihd-upload').click()

    await page.locator('#file-upload').setInputFiles('')

    await page.waitForTimeout(5000)
})

test('Multiple file',async ({page})=>{


    await page.goto()

    await page.locator('#filesToUpload').setInputFiles(['',''])

    // for removing

    await page.locator('#filesToUpload').setInputFiles([])


})
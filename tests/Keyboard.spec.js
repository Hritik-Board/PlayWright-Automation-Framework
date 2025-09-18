const  {test,expect} =  require('@playwright/test');

test('Keyboard actions',async ({page})=>{
    await page.goto("https://gotranscript.com/text-compare");

    page.waitForTimeout(3000)
    await page.locator('[name="text1"]').fill('Welcome to automation')

    // await page.type('')

    //control + A
    await page.keyboard.press('Control+A')

    //control + C
    await page.keyboard.press('Control+C')

    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')


    //Ctrl + V
    await page.keyboard.press('Control+V')




    await page.waitForTimeout(5000)
})
const  {test,expect} =  require('@playwright/test');

test('Mouse Events',async ({page})=>{
    await page.goto("https://demo.opencart.com/");

    const des =  await page.locator("//a[normalize-space()='Desktops']")

    const mac = await page.locator('//a[normalize-space()="Mac (1)"]')

    await des.hover()
    await mac.hover()

    const button = await page.locator("")

    await button.click({button:'right'})

    const db =  await page.locator("")

    await db.dblclick();

    const source  =  await page.locator("")

    const target  =  await page.locator("")

    //Approach 1
    await source.hover()
    await page.mouse.down()

    await target.hover()
    await page.mouse.up()

    //Approach 2
    await source.dragTo(target)
    



    await page.waitForTimeout(5000)
})
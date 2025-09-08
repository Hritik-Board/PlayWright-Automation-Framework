const {test,expect}  =  require('@playwright/test')
const { CLIENT_RENEG_WINDOW } = require('tls')

test('frames', async({page})=> {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total frames
    const Allframes =  await page.frames()
    console.log(Allframes.length)

    //aproach one using name or url
    // const frame1 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_1.html'})

    //  await frame1.fill('//input[@name="mytext1"]', "Hello");


    //approach 2 using frame locator

    const inputbox  =  await page.frameLocator("frame[src='frame_1.html']").locator('//input[@name="mytext1"]')
        inputbox.fill('Hritik')
    await page.waitForTimeout(3000)


})


const {test,expect}  =  require('@playwright/test')


test('Nested frames', async({page})=> {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3 =  await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

    // await frame3.locator('//input[@name="mytext3"]').fill('welcome')

    //nested frames

   const childAll =   await frame3.childFrames()
   console.log(childAll.length)

   await childAll[0].locator("//*[@id='i21']/div[2]").check()
    await page.waitForTimeout(3000)



})


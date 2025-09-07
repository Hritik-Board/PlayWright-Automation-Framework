const {expect,test} = require('@playwright/test')
const { constants } = require('buffer')
const { constrainedMemory } = require('process')

test('Handle checkboxes',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.selectOption('#colors',["Blue","Red","Yellow"])

    // const options = await page.locator('#colors option')

    // await expect(options).toHaveCount(7);

    // const options = await page.$$('#colors option')

    // await expect(options.length).toBe(7);

    const content  =  await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy();
    

    await page.waitForTimeout(5000)



})
const {expect,test} = require('@playwright/test')
const { constants } = require('buffer')
const { constrainedMemory } = require('process')

test('Handle checkboxes',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.locator("#country").selectOption({label:'India'})

    // await page.locator("#country").selectOption({value:'india'})

    // await page.locator("#country").selectOption({index:1})

    // await page.selectOption('#country','India')

    //Assertions

    // 1. chekc total number of options in the dropdown

    // const options =  await page.locator("#country option")

    // await expect(options).toHaveCount(10)

    // 2. Check number of options in dropdown - approach 2

    // const options = await page.$$('#country option')

    // console.log(options.length)

    // await expect(options.length).toBe(10)

    // 3. check presence of some value in the dropdown

    // const content =  await page.locator('#country').textContent()

    // await expect(content.includes("India")).toBeTruthy()

    // 4. Presence of value in dropdown appraoch 2

    // const options = await page.$$('#country option')

    // let status =  false;

    // for(const option of options ){
    //     // console.log(await option.textContent())
    //     let value = await option.textContent()
    //     if(value.includes('France'))
    //     {
    //         status  = true;
    //         break;
    //     }
    // }

    // await expect(status).toBeTruthy()
    // 5/ select options from dropfown using loop
    const options = await page.$$('#country option')

    let status =  false;

    for(const option of options ){
        // console.log(await option.textContent())
        let value = await option.textContent()
        if(value.includes('France'))
        {
            await page.selectOption("#country",'France')
            break;
        }
    }

    // await expect(status).toBeTruthy()


    await page.waitForTimeout(5000)



})
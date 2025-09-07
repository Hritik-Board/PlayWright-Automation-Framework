const {expect,test} = require('@playwright/test')


test('Handle checkboxes',async ({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0.2')

    await page.locator('.multiselect').click()

    //1 captire the options
    // const options  =  await page.locator('ul>li label input')

    // await expect(options).toHaveCount(11)

    // const options  =  await page.locator('ul>li label input')
    // await expect(options.length).toBe(11)

    //3 select multiple options



    const options  =  await page.locator('ul>li label')

    for(let option of options){
        const value =  await option.textContent();

        // console.log(value)

        if(value.includes('Angular')|| value.includes('Java')){
            await option.click();
        }

    }

    //deslect options

    const options  =  await page.locator('ul>li label')

    for(let option of options){
        const value =  await option.textContent();

        // console.log(value)

        if(value.includes('HTML')|| value.includes('CSS')){
            await option.click();
        }

    }
    await page.waitForTimeout(5000)


})
const {test,expect} = require('@playwright/test')

test('date pciker', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.fill('#datepicker','03/15/2024')

    const year  =  "2026"
    const month =  'March'
    const date =  '17'

    await page.click('#datepicker')

    while(true){
        const cy = await page.locator('.ui-datepicker-year').textContent()

        const cm =  await page.locator('.ui-datepicker-month').textContent()

        if(cy == year && cm == month){
            break;
        }

        await page.locator('[title="Next"]').click()


    }

    // const dates =      await page.$$("//a[@class = 'ui-state-default']")

    // for(const dt of dates){
    //     if(await dt.textContent() ==  date){
    //         await dt.click();
    //         break;
    //     }
    // }

    await page.click(`[data-date="${date}"]`);


    await page.waitForTi0meout(3000)
});
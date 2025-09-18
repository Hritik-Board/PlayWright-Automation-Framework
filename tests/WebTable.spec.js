const {test,expect}  =  require('@playwright/test')
const { machine } = require('os')

test('Alert with OK', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table =  await page.locator('#productTable')

    const col =  await table.locator('thead tr th')

    console.log(col.count())
    expect(await col.count()).toBe(4)

    const rows = await table.locator("tbody tr")

    console.log(rows.count())
    
    expect(await rows.count()).toBe(5)

    // select the checkbox of a particular product

    // const matchedRow  = await rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'SmartWatch'

    // })

    // await matchedRow.locator('input').check()

    //select multiple products by reusing fucntion
    
    // await selectPro(rows,page,'Smartwatch')
    // await selectPro(rows,page,'Laptop')
    // await selectPro(rows,page,'Tablet')

    // print the data from the table
    // for(let i = 0; i< await rows.count();i++){

    //     const r = rows.nth(i)
    //         const tds =  r.locator('td')
    //     for(let j=0; j<await tds.count()-1;j++){
    //         const Data =  await tds.nth(j).textContent()

    //         console.log(Data)
    //     }
    // }

    //get all the data in a pagination table
    const pages =  await page.locator('.pagination li a')
    console.log(await pages.count())

    for(let p=0; p<await pages.count();p++){

        if(p>0){
            await pages.nth(p).click()
        }

        for(let i = 0; i< await rows.count();i++){

            const r = rows.nth(i)
                const tds =  r.locator('td')
            for(let j=0; j<await tds.count()-1;j++){
                const Data =  await tds.nth(j).textContent()
    
                console.log(Data)
            }
        }

    }


    await page.waitForTimeout(3000)


})

async function selectPro(rows,page,product){
    const matchedRow  = await rows.filter({
        has: page.locator('td'),
        hasText: product

    })

    await matchedRow.locator('input').check()
}
import {test,expect, chromium} from '@playwright/test'
import { constants } from 'buffer'

// import { LoginPage } from '../Pages/Login'
// import { Home } from '../Pages/Home';

// test('Handle windows',async({page})=>{
 
//     const browser = await chromium.launch()

//     const context = await browser.newContext()

//     const page1 =  await context.newPage()

//     const page2 = await context.newPage()

//     const allpages  =  context.pages()

//     console.log(allpages.length)

//     await page1.goto("https://www.demoblaze.com")

//     await expect(page1).toHaveTitle('STORE')

//     await page2.goto("https://www.orangehrm.com")
    
// })

test('Handle multiple windows',async({page})=>{
 
    const browser = await chromium.launch()

    const context = await browser.newContext()

    const page1 =  await context.newPage()

    const allpages  =  context.pages()

    console.log(allpages.length)

    await page1.goto("https://www.orangehrm.com")

   const pagePromise   =   context.waitForEvent('page')
   await page1.locator("").click()
   const  newPage  =  await pagePromise;
   expect(newPage).toHaveTitle("")
    
})
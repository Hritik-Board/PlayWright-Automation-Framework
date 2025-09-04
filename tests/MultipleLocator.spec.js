// const {test,expect} = require('@playwright/test')

import {test,expect} from '@playwright/test';
import { log } from 'console';

test(' multiple Locators',async ({page})=>{
   await  page.goto("https://demoblaze.com/")

//    const links = await page.$$('a');
// //    console.log(links)

//    for(const link of links){
//     const linktext  = await link.textContent();
//     console.log(linktext)
//    }
await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
   const products =  await page.$$("//div[@id='tbodyid']//div//h4/a")

   for(const product of products){
    const text = await product.textContent();
    console.log(text)
   }

   await page.close();
})
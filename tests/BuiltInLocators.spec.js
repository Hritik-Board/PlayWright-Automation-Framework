// const {test,expect} = require('@playwright/test')

import {test,expect} from '@playwright/test';
import { log } from 'console';

test(' Builtin Locators',async ({page})=>{
   await  page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   
   const image = await page.getByAltText('company-branding')

   await expect(image).toBeVisible();

   await page.getByPlaceholder('Username').fill('Admin')

    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button',{type:'submit'}).click()

    const name =  await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()

    await expect(await page.getByText(name)).toBeVisible()

   

   await page.close();
})
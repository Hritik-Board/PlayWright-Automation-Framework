// const {test,expect} = require('@playwright/test')

import {test,expect} from '@playwright/test';
import { log } from 'console';

test('Locators',async ({page})=>{
   await  page.goto("https://demoblaze.com/")

   //click on login
   await page.locator("id=login2").click()

   //input username
   await page.fill('#loginusername','pavanol')
   await page.fill('#loginpassword','test@123')
   
   await page.click('//button[text()="Log in"]')

   const logoutLink = page.locator("//a[normalize-space()='Log out']")

   
   await expect(logoutLink).toBeVisible();

   await page.close();
})
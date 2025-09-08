const {test,expect}  =  require('@playwright/test')

test.skip('Alert with OK', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=> {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box')
        await dialog.accept()
    })

    await page.locator('#alertBtn').click()

    await page.waitForTimeout(3000)


})

test.skip('Confirmation dialog', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=> {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        // await dialog.accept()

        await dialog.dismiss();
    })

    await page.locator('#confirmBtn').click()

    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!')

    await page.waitForTimeout(3000)


})

test('Prompt dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      expect(dialog.message()).toContain('Please enter your name:');
      expect(dialog.defaultValue()).toBe('Harry Potter');
  
      await dialog.accept('John'); 
      // or: await dialog.dismiss();
    });
  
    await page.locator('#promptBtn').click();
  
    await expect(page.locator('#demo')).toHaveText('Hello John! How are you today?');
  
    await page.waitForTimeout(3000);
  });

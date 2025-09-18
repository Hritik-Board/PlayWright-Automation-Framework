import { test, expect } from '@playwright/test';
import path from 'path';

test('page screenshot', async ({ page }) => {
  await page.goto('https://demoblaze.com');

  const filePath = path.join(
    'D:/PlayWright/GeminiPlaywright/tests/screenshots',
    `Homepage_${Date.now()}.png`
  );

  await page.screenshot({ path: filePath });
});

test('Full page screenshot', async ({ page }) => {
    await page.goto('https://demoblaze.com');
  
    const filePath = path.join(
      'D:/PlayWright/GeminiPlaywright/tests/screenshots',
      `Fullpage_${Date.now()}.png`
    );
  
    await page.screenshot({ path: filePath, fullPage:true });
  });

  test.only('h page screenshot', async ({ page }) => {
    await page.goto('https://demoblaze.com');
  
    const filePath = path.join(
      'D:/PlayWright/GeminiPlaywright/tests/screenshots',
      `ele_${Date.now()}.png`
    );
  
    await page.locator('#login2').screenshot({ path: filePath, });
  });

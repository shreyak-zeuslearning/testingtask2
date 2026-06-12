import {test,expect} from '@playwright/test';
import {link} from '../utils/weblinks';

// failure 1 
test('01 Locator failure', async({page})=>{
  await page.goto(link.booklink);
  await page.locator('#wrong-id').click();
});

// failure 2 
test('02 Assertion failure',async({page})=>{
  await page.goto(link.booklink);
  await expect(page).toHaveTitle('Zeus');
})

// failure 3 
test('03 Element not visible',async({page})=>{
  await page.goto(link.booklink);
  await expect (page.getByText('Random text')).toBeVisible();
})

// //failure 4 
 test('04 Navigation failure',async({page})=>{
      await page.goto('https://wrongdemoqa.com/books')
 })

// failure 5
test('05 Closed Page Usage',async({page})=>{
  await page.goto(link.booklink)
   await page.close();
   await page.click('button');
})

// failure 6
test('06 Strict mode failure',async({page})=>{
  await page.goto(link.booklink);
  await page.locator('a').isVisible();
});

// failure 7 
test('07 Text verification failure',async({page})=>{
      await page.goto('https://www.saucedemo.com/');
    
      await expect(page.locator('#login-button')).toHaveText('Zeus');

})

//failure 8 
test('08 Disabled Element failure ',async({page})=>{

  await page.setContent(`
    <button id="submit"disabled> Submit </button>`
  );
    await expect (page.locator('#submit')).toBeEnabled();
})


import {test,expect} from '@playwright/test';
import {link} from '../utils/weblinks';

// failure 1 
test('Locator failure', async({page})=>{
  await page.goto(link.booklink);
  await page.locator('#wrong-id').click();
});

// failure 2 
test('Assertion failure',async({page})=>{
  await page.goto(link.booklink);
  await expect(page).toHaveTitle('Zeus');
})

// failure 3 
test('Element not visible',async({page})=>{
  await page.goto(link.booklink);
  await expect (page.getByText('Random text')).toBeVisible();
})

// //failure 4 
 test('Navigation failure',async({page})=>{
      await page.goto('https://wrongdemoqa.com/books')
 })

// failure 5
test('Closed Page Usage',async({page})=>{
  await page.goto(link.booklink)
   await page.close();
   await page.click('button');
})

// failure 6
test('Strict mode failure',async({page})=>{
  await page.goto(link.booklink);
  await page.locator('a').isVisible();
});

// failure 7 
test('Text verification failure',async({page})=>{
      await page.goto('https://www.saucedemo.com/');
    
      await expect(page.locator('#login-button')).toHaveText('Zeus');

})

//failure 8 
test('Disabled Element failure ',async({page})=>{

  await page.setContent(`
    <button id="submit"disabled> Submit </button>`
  );
    await expect (page.locator('#submit')).toBeEnabled();
})


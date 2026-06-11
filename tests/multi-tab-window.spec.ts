// import {test, expect,BrowserContext} from '@playwright/test';
// import { link } from '../utils/weblinks';
// import { BrowserWindowPage } from '../pages/BrowserWindowPage';

// test('TC 001 Verify New Tab button opens a new tab.', async({page,context})=>{

//     const browserWindowPage= new BrowserWindowPage(page);

//     await browserWindowPage.goto();

//     const[childPage]= await Promise.all([context.waitForEvent('page'),browserWindowPage.clickNewTab()]);
//     await childPage.waitForLoadState();
//     expect(childPage).toBeTruthy();
// });

// test('TC 002 Verify content of newly opened tab ("This is a sample page").', async({page,context})=>{

//     const browserWindowPage= new BrowserWindowPage(page);

//     await browserWindowPage.goto();

//     const[childPage]= await Promise.all([context.waitForEvent('page'),browserWindowPage.clickNewTab()]);
//     await childPage.waitForLoadState();
    
//     const childBrowserPage= new BrowserWindowPage(childPage);
//     await childBrowserPage.verifySamplePageText();
// });

// test('TC_003 Close child tab and switch back to parent.', async({page,context})=>{
//     const browserWindowPage= new BrowserWindowPage(page);
//     await browserWindowPage.goto();
//     const parentPage=page;

//     const [childPage]= await Promise.all([context.waitForEvent('page'),browserWindowPage.clickNewTab()]);
//     await childPage.waitForLoadState();
//     await childPage.close();
    
//     await expect(parentPage).toHaveURL(link.demosite);
// })


// test('Tc 004 Verify New Window Message functionality.', async({page,context})=>{
//     const browserWindowPage= new BrowserWindowPage(page);
//     await browserWindowPage.goto();

//     const [msgPage]= await Promise.all([context.waitForEvent('page'),browserWindowPage.clickNewWindowMsg()]);
//     await msgPage.waitForLoadState();
//     const childBrowserPage=new BrowserWindowPage(msgPage);
//     await childBrowserPage.verifyWindowMessage();
// } )

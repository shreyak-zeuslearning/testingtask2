import {test,expect,Locator} from '@playwright/test';
import { BookPage } from '../pages/BookPage';
import { delay } from '../utils/weblinks';

import customBooks from '../mocks/customBook.json';
import emptyBooks from '../mocks/emptyBook.json';
import delayedBooks from '../mocks/dalayedBook.json';

test ('TC_005 Mock Books API with custom books and verify UI', async ({page})=> {

    await page.route('**/BookStore/v1/Books', async route=>{
        await route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify(customBooks)
        });
    });

    const bookPage=new  BookPage(page);
    await bookPage.goto();

    await bookPage.verifyBookVisible(
        customBooks.books.map(book=>book.title)
    )
});

test('TC 006 Mock empty response and verify behavior.', async ({page})=> {
    await page.route('**/BookStore/v1/Books', async route=>{
        await route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify(emptyBooks)
        });
    });

    const bookPage=new  BookPage(page);
    await bookPage.goto();
    await bookPage.verifyNoBooksDisplayed(
        customBooks.books.map(book=>book.title)
    );
});

test('TC 007 Delay API response and handle the loading state.', async({page})=>{
    await page.route('**/BookStore/v1/Books', async route=>{
        await new Promise(resolve=>setTimeout(resolve,delay.delayTime));
        await route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify(delayedBooks)
        });
    });

    const bookPage=new  BookPage(page);
    await bookPage.goto();
    await bookPage.verifyBookVisible(
        delayedBooks.books.map(book=>book.title)
    );
});





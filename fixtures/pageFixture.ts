import {test as base , expect} from '@playwright/test';
import {BrowserWindowPage} from '../pages/BrowserWindowPage';
import {BookPage} from '../pages/BookPage';

type MyFixtures={
    browserWindowPage:BrowserWindowPage;
    bookPage:BookPage;
};

export const test = base.extend<MyFixtures>({
    browserWindowPage: async({page},use)=> {
        await use(new BrowserWindowPage(page));
    },

    bookPage:async({page},user)=>{
        await user(new BookPage(page));
    },
});

export{expect };

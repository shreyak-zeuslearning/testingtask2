import {Page,Locator, expect} from '@playwright/test';
import {link} from '../utils/weblinks'

export class BookPage{
    readonly page:Page;
    readonly bookRows:Locator;

    constructor(page:Page){
        this.page=page;
        this.bookRows=page.locator('.rt-tbody .rt-tr-group');
    }

    async goto(){
        await this.page.goto(link.booklink);
    }

    async verifyBookVisible(expectedTitles:string[]){

        for (const title of expectedTitles){
            await expect(this.page.getByText(title)).toBeVisible();
        }
    }

    async verifyNoBooksDisplayed(expectedTitles:string[]){
        for(const title of expectedTitles){
            await expect(this.page.getByText(title)).not.toBeVisible();
        }
    }
}

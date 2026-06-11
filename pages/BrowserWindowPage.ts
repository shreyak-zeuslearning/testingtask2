import {Page, Locator, expect} from '@playwright/test';
import{link} from '../utils/weblinks';

export class BrowserWindowPage{
    readonly page: Page;
    
    readonly newTabButton: Locator;
    readonly newWindowButton: Locator;
    readonly newWindowMsg: Locator;
    readonly sampleHeading:Locator;
    readonly messageBody:Locator;

    readonly samplePageText:string;
    readonly msgWindowText:string;


    constructor (page:Page){
    this.page = page;
    
    this.newTabButton=page.locator('#tabButton');
    this.newWindowButton=page.locator('#windowButton')
    this.newWindowMsg=page.locator('#messageWindowButton');
    this.sampleHeading=page.locator('#sampleHeading');
    this.messageBody=page.locator('body');

    this.samplePageText='This is a sample page';
    this.msgWindowText='Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.';
}

async goto(){
    await this.page.goto(link.demosite);
}

async clickNewTab(){
  await  this.newTabButton.click();
}

async clickNewWindowMsg(){
    await this.newWindowMsg.click();
}

async verifySamplePageText(){
    await expect (this.sampleHeading).toHaveText(this.samplePageText);
}

async verifyWindowMessage(){
    await expect(this.messageBody).toHaveText(this.msgWindowText);
}


}

import {chromium} from '@playwright/test';import fs from 'node:fs/promises';
await fs.mkdir('artifacts',{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const routes=['/','/feedtv-home','/feedtv-stream','/our-team','/blog','/case-studies','/preview-your-ads','/contact','/blog/ctv-attribution-that-works','/case-studies/beyond-the-benchmark','/thank-you'];
const results=[];
for(const route of routes){await page.goto('http://127.0.0.1:4173'+route);await page.evaluate(()=>document.fonts.ready);await page.evaluate(async()=>{await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});for(let y=0;y<await page.evaluate(()=>document.documentElement.scrollHeight);y+=600){await page.evaluate(y=>window.scrollTo({top:y,behavior:'instant'}),y);await page.waitForTimeout(70);}await page.waitForTimeout(850);await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await page.screenshot({path:'artifacts/'+(route==='/'?'homepage':route.replaceAll('/','_'))+'.png',fullPage:true});if(route==='/')await page.screenshot({path:'artifacts/homepage-first-screen.png'});const info=await page.evaluate(()=>({title:document.title,height:document.documentElement.scrollHeight,width:document.documentElement.scrollWidth,broken:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),headings:[...document.querySelectorAll('main [data-name="Hero"] p')].slice(0,3).map(e=>e.textContent?.trim())}));results.push({route,...info});}
await fs.writeFile('artifacts/desktop-results.json',JSON.stringify({errors,results},null,2));console.log(JSON.stringify({errors,results}));await browser.close();


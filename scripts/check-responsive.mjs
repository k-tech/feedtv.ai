import {chromium,expect} from '@playwright/test';
import fs from 'node:fs/promises';

const routes=['/','/feedtv-home','/feedtv-stream','/our-team','/blog','/case-studies','/preview-your-ads','/contact','/thank-you','/case-studies/beyond-the-benchmark','/blog/ctv-attribution-playbook','/blog/ctv-attribution-that-works','/blog/the-last-click-blind-spot','/blog/ctv-test-framework','/blog/ctv-creative-best-practices','/blog/ipv4-vs-ipv6-ctv'];
// Resize each loaded page in both directions, including either side of breakpoints.
const widths=[1920,1440,1280,1101,1100,1024,900,768,701,700,390,320,1920];
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({reducedMotion:'reduce'});
const errors=[],results=[];
page.on('pageerror',error=>errors.push(error.message));
try{
 for(const route of routes){
  await page.goto('http://127.0.0.1:4173'+route);
  const broken=await page.evaluate(async()=>{await document.fonts.ready;return (await Promise.all([...document.images].map(async image=>{try{await image.decode();return null}catch{return image.getAttribute('src')}}))).filter(Boolean)});
  expect(broken,route+' image decoding').toEqual([]);
  let originalCopy;
  for(const width of widths){
   await page.setViewportSize({width,height:800});
   await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
   const result=await page.evaluate(()=>{
    const issues=[];
    const label=e=>({text:(e.textContent||e.getAttribute('alt')||e.dataset.name||'').trim().slice(0,65),node:e.dataset.nodeId||e.id||'',slot:e.closest('[data-name]')?.dataset.name});
    const check=(element,rect,kind)=>{
     if(!rect.width||!rect.height)return;
     const detail=label(element);
     if(rect.left< -1.5||rect.right>innerWidth+1.5){issues.push({...detail,kind:kind+' outside viewport'});return}
     for(let ancestor=element.parentElement;ancestor&&ancestor.tagName!=='MAIN';ancestor=ancestor.parentElement){
      const style=getComputedStyle(ancestor),bounds=ancestor.getBoundingClientRect();
      for(const [axis,start,end] of [['X','left','right'],['Y','top','bottom']]){
       if(['hidden','clip','auto','scroll'].includes(style['overflow'+axis])&&(rect[start]<bounds[start]-2||rect[end]>bounds[end]+2)){
        issues.push({...detail,kind:kind+' clipped on '+axis,ancestor:ancestor.dataset.name||ancestor.id});return;
       }
      }
     }
    };
    for(const element of document.querySelectorAll('main h1,main h2,main h3,main p,main a:not(:has(p))')){
     if(/^(PLACEHOLDER|16:9 IMAGE|Client-safe hero image)/.test(element.textContent.trim()))continue;
     const range=document.createRange();range.selectNodeContents(element);
     for(const rect of range.getClientRects())check(element,rect,'Text');
    }
    for(const element of document.querySelectorAll('main [data-name^="img/"],main [data-name^="home-product-"],main [data-name="Image · 16:9 (placeholder)"] img,main [data-name="Hero thumbnail · Attribution path"] img,main [data-name="Image · Article hero image"] img,main .playbook-art img,main a,main button')){
     check(element,element.getBoundingClientRect(),element.matches('a,button')?'Control':'Image');
    }
    return {issues:[...new Map(issues.map(issue=>[JSON.stringify(issue),issue])).values()],documentWidth:document.documentElement.scrollWidth,copy:[...document.querySelectorAll('main h1,main h2,main h3,main p')].filter(e=>!e.closest('.testimonial')).map(e=>e.textContent.replace(/\s+/g,' ').trim()).join('|')};
   });
   originalCopy??=result.copy;
   if(result.copy!==originalCopy)result.issues.push({kind:'Copy changed during resize'});
   delete result.copy;
   results.push({route,width,...result});
  }
 }
 const failures=results.filter(r=>r.issues.length||r.documentWidth!==r.width);
 expect(failures,'Responsive clipping, overflow, and content preservation').toEqual([]);
 expect(errors).toEqual([]);
 console.log(JSON.stringify({layouts:results.length,routes:routes.length,minWidth:320,maxWidth:1920,errors,status:'passed'}));
}finally{
 await fs.mkdir('artifacts',{recursive:true});
 await fs.writeFile('artifacts/responsive-check-results.json',JSON.stringify({results,errors},null,2));
 await browser.close();
}

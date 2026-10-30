// Compile the design's property values into ordinary CSS. No CSS framework runtime.
export function designStyles(sources){
 const tokens=new Set(sources.join('\n').match(/\[[^\]\r\n]+\]|-?[a-z][\w-]*-\[[^\]\r\n]+\]|-?[a-z][\w/.-]*/g)||[]);
 const rules=[],unknown=[];for(const token of tokens){const css=compile(token);if(css)rules.push(`[class~=${JSON.stringify(token)}]{${css}}`);else if(token.includes('[')&&!token.includes('${'))unknown.push(token);}
 return {css:rules.join('\n'),unknown};
}
function compile(t){
 const simple={absolute:'position:absolute',relative:'position:relative',fixed:'position:fixed',block:'display:block',hidden:'display:none',flex:'display:flex',grid:'display:grid','inline-grid':'display:inline-grid','flex-col':'flex-direction:column','flex-row':'flex-direction:row','flex-wrap':'flex-wrap:wrap','shrink-0':'flex-shrink:0','grow':'flex-grow:1','items-start':'align-items:flex-start','items-center':'align-items:center','items-end':'align-items:flex-end','items-stretch':'align-items:stretch','justify-center':'justify-content:center','justify-between':'justify-content:space-between','justify-end':'justify-content:flex-end','content-stretch':'align-content:stretch','place-items-start':'place-items:start','overflow-clip':'overflow:clip','overflow-hidden':'overflow:hidden','pointer-events-none':'pointer-events:none','cursor-pointer':'cursor:pointer','not-italic':'font-style:normal',italic:'font-style:italic','text-left':'text-align:left','text-center':'text-align:center','text-right':'text-align:right','whitespace-nowrap':'white-space:nowrap','whitespace-pre':'white-space:pre','whitespace-pre-wrap':'white-space:pre-wrap','bg-clip-text':'background-clip:text;-webkit-background-clip:text','border-solid':'border-style:solid',border:'border-width:1px','border-2':'border-width:2px','border-t':'border-top-width:1px','border-b':'border-bottom-width:1px','border-r':'border-right-width:1px','border-l':'border-left-width:1px','bg-white':'background-color:#fff','bg-transparent':'background-color:transparent','text-white':'color:#fff','text-black':'color:#000','min-w-px':'min-width:1px','w-px':'width:1px','h-px':'height:1px','w-full':'width:100%','h-full':'height:100%','min-w-full':'min-width:100%','size-full':'width:100%;height:100%','max-w-none':'max-width:none','rounded-full':'border-radius:999px','object-cover':'object-fit:cover','object-contain':'object-fit:contain','col-1':'grid-column:1','row-1':'grid-row:1','opacity-0':'opacity:0','opacity-100':'opacity:1','-translate-x-1/2':'transform:translateX(-50%)','-translate-y-1/2':'transform:translateY(-50%)'};
 if(t==='contents')return 'display:contents';
 if(t==='left-1/2')return 'left:50%';
 if(t==='top-1/2')return 'top:50%';
 if(t==='leading-none')return 'line-height:1';
 if(t==='-translate-x-1/2')return '--translate-x:-50%;transform:translate(var(--translate-x,0),var(--translate-y,0))';
 if(t==='-translate-y-1/2')return '--translate-y:-50%;transform:translate(var(--translate-x,0),var(--translate-y,0))';
 if(simple[t])return simple[t];
 if(t==='[word-break:break-word]')return 'overflow-wrap:break-word';
 const match=t.match(/^(-?)([a-z][\w-]*)-\[(.*)\]$/);let negative=false,k,v;
 if(match){negative=!!match[1];k=match[2];v=match[3].replaceAll('_',' ');if(negative)v='-'+v;}
 else {const m=t.match(/^(top|left|right|bottom|inset|mb|mt|ml|mr|m|p|px|py|gap|z)-(\d+)$/);if(!m)return '';k=m[1];v=m[2]==='0'?'0':`${Number(m[2])*4}px`;}
 if(k==='font'){let weight=/ExtraBold/.test(v)?800:/Bold/.test(v)?700:/Light/.test(v)?300:400;return `font-family:Lato,Arial,sans-serif;font-weight:${weight}`;}
 if(k==='text')return /^#|^rgb|^transparent|^white|^black/.test(v)?`color:${v}`:`font-size:${v}`;
 if(k==='bg')return `background-color:${v}`;
 if(k==='rounded')return `border-radius:${v}`;
 if(k==='rounded-tl')return `border-top-left-radius:${v}`;
 if(k==='border')return `border-color:${v}`;
 if(k==='shadow')return `box-shadow:${v}`;
 if(k==='blur')return `filter:blur(${v})`;
 const map={w:'width',h:'height',size:['width','height'],'min-w':'min-width','min-h':'min-height','max-w':'max-width','max-h':'max-height',top:'top',left:'left',right:'right',bottom:'bottom',inset:'inset',p:'padding',px:['padding-left','padding-right'],py:['padding-top','padding-bottom'],pt:'padding-top',pb:'padding-bottom',pl:'padding-left',pr:'padding-right',m:'margin',mx:['margin-left','margin-right'],my:['margin-top','margin-bottom'],mt:'margin-top',mb:'margin-bottom',ml:'margin-left',mr:'margin-right',gap:'gap','gap-x':'column-gap','gap-y':'row-gap',tracking:'letter-spacing',leading:'line-height',flex:'flex','grid-cols':'grid-template-columns','grid-rows':'grid-template-rows',opacity:'opacity',z:'z-index'};
 if(map[k]){if(v.includes('calc('))v=v.replace(/(\d(?:px|%|rem)?)([+-])(\d)/g,'$1 $2 $3');return [].concat(map[k]).map(p=>`${p}:${v}`).join(';');}return '';
}

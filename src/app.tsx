import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import Homepage from './pages/1751-1792';
import Home from './pages/1668-2932';
import Stream from './pages/1668-3140';
import Team from './pages/1668-3274';
import Blog from './pages/1668-3338';
import Cases from './pages/1668-3428';
import Preview from './pages/1668-3475';
import Contact from './pages/1668-3498';
import ArticleTemplate from './pages/1668-3533';
import Thanks from './pages/1668-3574';
import CaseDetail from './pages/1778-1754';
import articles from './articles.json';
import {ClosingCTA, Footer} from './shared';
import {CmsAdmin, CmsArticle, CmsListing, cmsArticleHref, cmsUrl, fetchCmsArticles, type CmsArticleRecord, type CmsArticleType} from './ai-cms';

const firstArticle = '/blog/' + articles[0].slug;
const pages: Record<string, React.ComponentType<any>> = {
  '/': Homepage,
  '/feedtv-home': Home,
  '/feedtv-stream': Stream,
  '/our-team': Team,
  '/blog': Blog,
  '/case-studies': Cases,
  '/preview-your-ads': Preview,
  '/contact': Contact,
  '/thank-you': Thanks,
  '/case-studies/beyond-the-benchmark': CaseDetail,
  '/blog/ctv-attribution-playbook': ArticleTemplate,
};
const searchPages = [
  {title: 'FeedTV Home', url: '/feedtv-home', text: 'Direct OEM inventory Samsung LG Vizio TCL masthead'},
  {title: 'FeedTV Stream', url: '/feedtv-stream', text: 'AI DSP programmatic bidding attribution performance'},
  {title: 'Our Team', url: '/our-team', text: 'Leadership Andrew Sarah Ken'},
  {title: 'Case Studies', url: '/case-studies', text: 'Customer stories and measurable CTV outcomes'},
  {title: 'Preview Your Ads', url: '/preview-your-ads', text: 'creative preview television'},
  {title: 'Contact', url: '/contact', text: 'Book a Meeting Get your media plan'},
  ...articles.map(article => ({title: article.title, url: '/blog/' + article.slug, text: article.paragraphs.slice(0, 3).map(paragraph => paragraph.text).join(' '), cmsArticle: true})),
];

type SearchPage = {title: string; url: string; text: string; cmsArticle?: boolean};
function articleTypeHref(article: CmsArticleRecord) {
  return cmsArticleHref(article);
}

function Nav({pathname}: {pathname: string}) {
  const [menu, setMenu] = useState('');
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [mobile, setMobile] = useState(false);
  const [solid, setSolid] = useState(false);
  const [cmsSearchResults, setCmsSearchResults] = useState<CmsArticleRecord[]>([]);
  const [cmsSearchTerm, setCmsSearchTerm] = useState('');
  const [cmsSearchStatus, setCmsSearchStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [searchRetry, setSearchRetry] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const configuredCms = cmsUrl();
  const menuItems: Record<string, [string, string, string][]> = {
    Products: [['FeedTV Home', '/feedtv-home', 'Direct OEM inventory'], ['FeedTV Stream', '/feedtv-stream', 'AI-powered CTV buying']],
    Resources: [
      ['Blog', '/blog', 'Ideas for CTV performance'],
      ['Case Studies', '/case-studies', 'The results behind the screen'],
      ...(configuredCms ? [['FeedTV 101', '/ftv-101', 'Learn the fundamentals'] as [string, string, string], ['All Resources', '/resources', 'Browse all published content'] as [string, string, string]] : []),
      ['Preview Your Ads', '/preview-your-ads', 'See your creative on TV'],
    ],
  };
  const staticPages = (configuredCms ? searchPages.filter(page => !page.cmsArticle) : searchPages) as SearchPage[];

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector('main .home-hero,main [data-name="Hero"],main [data-name="Product hero"]');
      const nav = document.querySelector('.site-nav');
      const threshold = hero ? hero.getBoundingClientRect().bottom + window.scrollY - (nav?.getBoundingClientRect().height || 88) : 0;
      setSolid(window.scrollY >= threshold);
    };
    window.addEventListener('scroll', update, {passive: true});
    window.addEventListener('resize', update);
    update();
    return () => {window.removeEventListener('scroll', update); window.removeEventListener('resize', update);};
  }, [pathname]);
  useEffect(() => {setMenu(''); setSearch(false); setMobile(false);}, [pathname]);
  useEffect(() => {if (search) searchRef.current?.focus();}, [search]);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {setSearch(false); setMenu(''); setMobile(false);}
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
  useEffect(() => {
    const term = query.trim();
    if (!configuredCms || !search || !term) {
      setCmsSearchTerm(term);
      setCmsSearchResults([]);
      setCmsSearchStatus('idle');
      return;
    }
    const controller = new AbortController();
    let active = true;
    setCmsSearchTerm(term);
    setCmsSearchResults([]);
    setCmsSearchStatus('loading');
    const timer = window.setTimeout(() => {
      fetchCmsArticles({q: query.trim(), page: 1, pageSize: 12, signal: controller.signal}).then(result => {
        if (active) {setCmsSearchResults(result.articles); setCmsSearchStatus('ready');}
      }).catch(() => {
        if (active) {setCmsSearchResults([]); setCmsSearchStatus('error');}
      });
    }, 250);
    return () => {active = false; window.clearTimeout(timer); controller.abort();};
  }, [configuredCms, query, search, searchRetry]);

  const results = staticPages.map(page => ({
    ...page,
    score: query.trim() ? query.toLowerCase().split(/\s+/).reduce((score, word) => score + (page.title.toLowerCase().includes(word) ? 4 : page.text.toLowerCase().includes(word) ? 1 : 0), 0) : 1,
  })).filter(page => page.score > 0).sort((a, b) => b.score - a.score).slice(0, configuredCms && query.trim() ? 4 : 8);
  const currentCmsSearch = cmsSearchTerm === query.trim();
  const visibleCmsResults = currentCmsSearch ? cmsSearchResults : [];
  const visibleCmsSearchStatus = currentCmsSearch ? cmsSearchStatus : query.trim() ? 'loading' : 'idle';
  const cmsResults = configuredCms && query.trim() ? visibleCmsResults.slice(0, Math.max(0, 8 - results.length)) : [];

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className={'site-nav ' + (pathname === '/' && !solid ? 'transparent' : 'solid')}>
      <div className="nav-shell">
        <a href="/" className="nav-logo" aria-label="FeedTV home"><img className="nav-mark" src="/assets/1668-3498-imgMark.svg" alt=""/><img className="nav-wordmark" src="/assets/1668-3498-imgWordmark.svg" alt="FeedTV"/></a>
        <button className="mobile-toggle" aria-label={mobile ? 'Close navigation' : 'Open navigation'} aria-expanded={mobile} onClick={() => setMobile(!mobile)}>{mobile ? '✕' : '☰'}</button>
        <nav className={mobile ? 'mobile-open' : ''} aria-label="Main navigation">
          {['Products', 'Our Team', 'Resources', 'Contact'].map(label => menuItems[label]
            ? <div className="nav-menu" key={label} onMouseEnter={() => setMenu(label)} onMouseLeave={() => setMenu('')} onBlur={event => {if (!event.currentTarget.contains(event.relatedTarget as Node)) setMenu('');}}>
              <button aria-expanded={menu === label} aria-controls={'menu-' + label} onClick={() => setMenu(menu === label ? '' : label)}>{label}</button>
              <div className={'dropdown ' + (menu === label ? 'open' : '')} id={'menu-' + label}>{menuItems[label].map(([name, url, description]) => <a key={name} href={url}><strong>{name}</strong><span>{description}</span></a>)}</div>
            </div>
            : <a key={label} href={label === 'Contact' ? '/contact' : '/our-team'} aria-current={pathname === (label === 'Contact' ? '/contact' : '/our-team') ? 'page' : undefined}>{label}</a>)}
          <button className="search-trigger" onClick={() => setSearch(true)}><img src="/assets/1668-3498-imgSearchIcon.svg" alt=""/>Search</button>
          <a className="button nav-cta" href="/contact">Book a Meeting</a>
        </nav>
      </div>
    </header>
    {search && <div className="modal-shade" onClick={event => {if (event.target === event.currentTarget) setSearch(false);}}>
      <section className="search-dialog" role="dialog" aria-modal="true" aria-label="Search FeedTV" onKeyDown={event => {
        if (event.key === 'Tab') {
          const focusables = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button,input,a'));
          if (event.shiftKey && document.activeElement === focusables[0]) {event.preventDefault(); focusables.at(-1)?.focus();}
          else if (!event.shiftKey && document.activeElement === focusables.at(-1)) {event.preventDefault(); focusables[0]?.focus();}
        }
      }}>
        <div className="search-heading"><h2>Search FeedTV</h2><button aria-label="Close search" onClick={() => setSearch(false)}>✕</button></div>
        <label className="sr-only" htmlFor="site-search">Search pages and articles</label>
        <input ref={searchRef} id="site-search" placeholder="Search pages, products and insights…" value={query} onChange={event => setQuery(event.target.value)}/>
        <div className="search-results" aria-live="polite">
          {results.map(page => <a key={page.url} href={page.url}><span>{page.title}</span><span aria-hidden="true">↗</span></a>)}
          {cmsResults.map(article => <a key={article.type + ':' + article.slug} href={articleTypeHref(article)}><span>{article.title}{article.category && <small> · {article.category}</small>}</span><span aria-hidden="true">↗</span></a>)}
          {configuredCms && query.trim() && visibleCmsSearchStatus === 'loading' && <p>Searching published articles…</p>}
          {configuredCms && query.trim() && visibleCmsSearchStatus === 'error' && <p>CMS search is unavailable. <button className="back-link" onClick={() => setSearchRetry(value => value + 1)}>Try again</button></p>}
          {!results.length && !cmsResults.length && visibleCmsSearchStatus === 'ready' && <p>No results. Try “attribution”, “creative” or “CTV”.</p>}
          {!results.length && !cmsResults.length && !configuredCms && <p>No results. Try “attribution”, “creative” or “CTV”.</p>}
        </div>
      </section>
    </div>}
  </>;
}

function Article({article}: {article: typeof articles[number]}) {
  return <div className="custom-article"><header className="article-header"><a className="back-link" href="/blog">← &nbsp;Back to blog</a><span className="eyebrow">{article.category}</span><h1>{article.title}</h1><p>{article.paragraphs[0]?.text}</p><small>{Math.max(5, Math.ceil(article.paragraphs.reduce((count, paragraph) => count + paragraph.text.split(' ').length, 0) / 220))} min read · FeedTV editorial</small></header><div className="article-art"><img src="/assets/1668-3533-imgArtwork.svg" alt="CTV attribution signals connected across screens"/></div><article className="article-body">{article.paragraphs.slice(1).map((paragraph, index) => paragraph.heading ? <h2 key={index}>{paragraph.text}</h2> : paragraph.list ? <p className="article-bullet" key={index}>{paragraph.text}</p> : <p key={index}>{paragraph.text}</p>)}</article><ClosingCTA/><Footer/></div>;
}

function NotFound() {
  return <div className="not-found"><span className="eyebrow">404</span><h1>This screen isn’t available.</h1><a className="button" href="/">Back to home</a></div>;
}

type CmsRoute = {kind: 'listing'; type?: CmsArticleType; title: string; description: string} | {kind: 'article'; slug: string; back: string} | {kind: 'admin'};
function cmsRoute(pathname: string): CmsRoute | null {
  if (pathname === '/admin') return {kind: 'admin'};
  if (!cmsUrl()) return null;
  const lists: {path: string; type?: CmsArticleType; title: string; description: string}[] = [
    {path: '/blog', type: 'blog', title: 'Ideas for CTV performance', description: 'Insights on connected TV, measurement, and campaign growth.'},
    {path: '/case-studies', type: 'case-study', title: 'The results behind the screen', description: 'Published customer stories and measurable CTV outcomes.'},
    {path: '/ftv-101', type: 'ftv-101', title: 'FeedTV 101', description: 'A practical introduction to FeedTV, CTV advertising, and performance.'},
    {path: '/resources', title: 'All resources', description: 'Browse published articles, case studies, and FeedTV 101 guides.'},
  ];
  for (const list of lists) {
    if (pathname === list.path) return {kind: 'listing', type: list.type, title: list.title, description: list.description};
    if (pathname.startsWith(list.path + '/')) {
      let slug = pathname.slice(list.path.length + 1);
      try {slug = decodeURIComponent(slug);} catch { /* Keep malformed escapes as a CMS lookup that resolves to not found. */ }
      return {kind: 'article', slug, back: list.path};
    }
  }
  return null;
}

function App() {
  const [pathname, setPathname] = useState(location.pathname.replace(/\/$/, '') || '/');
  const [routeVersion, setRouteVersion] = useState(0);
  const [legal, setLegal] = useState('');
  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    const updatePath = () => {
      setPathname(location.pathname.replace(/\/$/, '') || '/');
      setRouteVersion(version => version + 1);
      window.scrollTo({top: 0, behavior: 'instant'});
    };
    window.addEventListener('popstate', updatePath);
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const legalLink = target.closest<HTMLElement>('[data-legal]');
      if (legalLink) {setLegal(legalLink.dataset.legal!); return;}
      const anchor = target.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
      const url = new URL(anchor.href);
      if (url.origin !== location.origin || url.hash) return;
      event.preventDefault();
      history.pushState({}, '', url.pathname);
      updatePath();
    };
    document.addEventListener('click', handleClick);
    return () => {window.removeEventListener('popstate', updatePath); document.removeEventListener('click', handleClick);};
  }, []);

  useEffect(() => {
    const route = cmsRoute(pathname);
    const cmsTitle = route?.kind === 'listing' ? route.title : undefined;
    const title = cmsTitle || searchPages.find(page => page.url === pathname)?.title || (pathname === '/thank-you' ? 'Thank You' : 'Premium Ads You Can Actually See');
    document.title = title + ' | FeedTV';
    const node = main.current;
    if (!node) return;
    if (!route) wirePage(node, pathname);
    const sections = Array.from(node.firstElementChild?.children || []).filter(element => element instanceof HTMLElement && !element.matches('[data-name="Hero"],[data-name="Footer"]')) as HTMLElement[];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {entry.target.classList.add('revealed'); observer.unobserve(entry.target);}
    }), {threshold: 0, rootMargin: '0px 0px -20% 0px'});
    if (!reduced) sections.forEach(section => {
      if (section.getBoundingClientRect().top > window.innerHeight) {section.classList.add('reveal-section'); observer.observe(section);}
    });
    return () => observer.disconnect();
  }, [pathname, routeVersion]);

  const route = cmsRoute(pathname);
  const Page = pages[pathname];
  const article = articles.find(item => pathname === '/blog/' + item.slug);
  let content: React.ReactNode;
  if (route?.kind === 'listing') content = <CmsListing key={pathname} type={route.type} title={route.title} description={route.description}/>;
  else if (route?.kind === 'article') content = <CmsArticle key={pathname} slug={route.slug} back={route.back}/>;
  else if (route?.kind === 'admin') content = <CmsAdmin/>;
  else if (Page) content = <Page/>;
  else if (article) content = <Article article={article}/>;
  else content = <NotFound/>;

  return <><Nav pathname={pathname}/><main id="main-content" className={'page-main ' + (pathname === '/' ? 'homepage' : '') + (pathname === '/preview-your-ads' ? ' preview-page' : '')} ref={main} key={pathname + ':' + routeVersion}>{content}</main>{legal && <div className="modal-shade" onClick={event => {if (event.target === event.currentTarget) setLegal('');}}><section className="search-dialog" role="dialog" aria-modal="true" aria-label={legal}><div className="search-heading"><h2>{legal}</h2><button onClick={() => setLegal('')} aria-label="Close">✕</button></div><p>The {legal.toLowerCase()} for feedtv.ai will be available when the website launches. This design preview does not send contact forms or email addresses to FeedTV.</p></section></div>}</>;
}

function wirePage(root: HTMLElement, path: string) {
  root.querySelectorAll<HTMLAnchorElement>('a:not([href])').forEach(anchor => {
    const text = (anchor.textContent || '').trim();
    let href = '/contact';
    if (text.startsWith('Explore FeedTV Home') || text === 'FeedTV Home') href = '/feedtv-home';
    else if (text.startsWith('Explore FeedTV Stream') || text === 'FeedTV Stream') href = '/feedtv-stream';
    else if (/Back to home/i.test(text) || anchor.dataset.name === 'Logo') href = '/';
    else if (/Back to blog|Read the blog|^Blog$/.test(text)) href = '/blog';
    else if (/Back to case|^Case Studies$/.test(text)) href = '/case-studies';
    else if (text === 'Our Team') href = '/our-team';
    else if (text === 'Preview Your Ads') href = '/preview-your-ads';
    else if (/Read full article/.test(text)) href = firstArticle;
    else if (/Read the case study|Beyond the Benchmark/.test(text)) href = '/case-studies/beyond-the-benchmark';
    anchor.href = href;
  });
  root.querySelectorAll<HTMLAnchorElement>('a').forEach(anchor => {
    if (/careers/i.test(anchor.textContent || '')) {anchor.href = 'https://feedmob.com/careers/'; anchor.target = '_blank';}
    if (anchor.href.includes('ctv-ad-previewer.feedmob.com')) anchor.onclick = event => {
      if (sessionStorage.getItem('feedtv-preview') !== 'true') {
        event.preventDefault();
        root.querySelector<HTMLInputElement>('#preview-email')?.focus();
        root.querySelector('.preview-gate')?.scrollIntoView({behavior: 'smooth', block: 'center'});
      }
    };
  });
  root.querySelectorAll<HTMLAnchorElement>('[data-name^="Article ·"]').forEach((anchor, index) => {anchor.href = '/blog/' + articles[index % articles.length].slug;});
  root.querySelectorAll<HTMLAnchorElement>('[data-name^="Case ·"]').forEach((anchor, index) => {
    anchor.href = index === 0 ? '/case-studies/beyond-the-benchmark' : index === 1 ? 'https://feedmob.com/casestudies/globalfintech-app-x-adtech-platform-driving-growth-with-ctv/' : 'https://feedmob.com/casestudies/ctv-growth-for-a-leading-cryptocurrency-platform/';
    if (index > 0) {anchor.target = '_blank'; anchor.rel = 'noopener noreferrer';}
  });
  root.querySelectorAll<HTMLElement>('[data-name^="Button ·"]').forEach(element => {
    if (element.tagName !== 'A') {
      element.setAttribute('role', 'link'); element.tabIndex = 0; element.onclick = () => navigate('/contact');
      element.onkeydown = event => {if (event.key === 'Enter') navigate('/contact');};
    }
  });
  root.querySelectorAll<HTMLAnchorElement>('a[data-name*="Live Placement"]').forEach(anchor => {anchor.href = '/preview-your-ads';});
  root.querySelectorAll<HTMLElement>('[data-name^="Card ·"]').forEach(element => element.classList.add('hover-card'));
  root.querySelectorAll<HTMLElement>('[data-name="Footer"] [data-name="Legal links"] p').forEach(element => {
    element.tabIndex = 0; element.setAttribute('role', 'button'); element.dataset.legal = element.textContent?.trim();
    element.onkeydown = event => {if (event.key === 'Enter' || event.key === ' ') element.click();};
  });
  root.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]').forEach(anchor => {anchor.rel = 'noopener noreferrer';});
  root.querySelectorAll<HTMLImageElement>('img').forEach(image => {
    if (!image.alt) {
      const slot = image.closest<HTMLElement>('[data-name]')?.dataset.name || '';
      image.alt = /img\/|home-product|hero|case-study/i.test(slot) ? slot.replace(/^img\//, '').replaceAll('-', ' ') : '';
    }
    image.decoding = 'async';
  });
  const title = root.querySelector<HTMLElement>('[data-name="Hero"] [data-name="Copy"]>p:nth-child(2)');
  if (title && title.textContent?.trim().length! > 20) title.setAttribute('role', 'heading');
}

function navigate(url: string) {
  history.pushState({}, '', url);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

createRoot(document.getElementById('root')!).render(<App/>);

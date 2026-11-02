import React, {useEffect, useRef, useState} from 'react';
import {Footer} from './shared';

declare global {
  interface Window {FEEDTV_AI_CMS_URL?: string}
}

export type CmsArticleType = 'blog' | 'case-study' | 'ftv-101';
export type CmsArticleRecord = {
  slug: string;
  title: string;
  type: CmsArticleType;
  category?: string;
  dek?: string;
  cover?: {url: string; alt?: string};
  date?: string;
  updatedAt?: string;
  publishedAt?: string;
  tags?: string[];
  url?: string;
};
type CmsArticlePage = {articles: CmsArticleRecord[]; total: number; page: number; pageSize: number; totalPages: number};
type CmsEmbed = {slug: string; title: string; type: CmsArticleType; dek?: string; url?: string; html: string};

const REQUEST_TIMEOUT_MS = 10000;
export const CMS_PAGE_SIZE = 12;

export const cmsUrl = (): string => {
  const configured = (window.FEEDTV_AI_CMS_URL || '').trim();
  if (!configured) return '';
  try {
    const url = new URL(configured, window.location.origin);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return '';
    return url.href.replace(/\/+$/, '');
  } catch {
    return '';
  }
};

function request(url: string, signal?: AbortSignal): Promise<Response> {
  const controller = new AbortController();
  const abort = () => controller.abort();
  const timeout = window.setTimeout(abort, REQUEST_TIMEOUT_MS);
  if (signal?.aborted) controller.abort();
  else signal?.addEventListener('abort', abort, {once: true});
  return fetch(url, {signal: controller.signal, cache: 'no-store', credentials: 'omit'}).finally(() => {
    window.clearTimeout(timeout);
    signal?.removeEventListener('abort', abort);
  });
}

function articlesUrl(options: {type?: CmsArticleType; q?: string; page: number; pageSize: number}): string {
  const params = new URLSearchParams({page: String(options.page), pageSize: String(options.pageSize)});
  if (options.type) params.set('type', options.type);
  if (options.q?.trim()) params.set('q', options.q.trim());
  return `${cmsUrl()}/api/public/articles?${params.toString()}`;
}

export async function fetchCmsArticles(options: {
  type?: CmsArticleType;
  q?: string;
  page?: number;
  pageSize?: number;
  signal?: AbortSignal;
}): Promise<CmsArticlePage> {
  if (!cmsUrl()) throw new Error('AI CMS is not configured.');
  const response = await request(articlesUrl({
    type: options.type,
    q: options.q,
    page: options.page || 1,
    pageSize: options.pageSize || CMS_PAGE_SIZE,
  }), options.signal);
  if (!response.ok) throw new Error(`AI CMS returned ${response.status}.`);
  const payload = await response.json() as Partial<CmsArticlePage>;
  if (!Array.isArray(payload.articles) || !Number.isFinite(Number(payload.totalPages))) {
    throw new Error('AI CMS returned an invalid articles response.');
  }
  return {...payload, totalPages: Math.max(1, Math.floor(Number(payload.totalPages)))} as CmsArticlePage;
}

/** Retrieve all server pages in their original order for complete category filtering. */
async function fetchAllCmsArticles(type: CmsArticleType | undefined, q: string, signal: AbortSignal): Promise<CmsArticleRecord[]> {
  const first = await fetchCmsArticles({type, q, page: 1, pageSize: CMS_PAGE_SIZE, signal});
  const articles = [...first.articles];
  for (let page = 2; page <= first.totalPages; page += 4) {
    const pages = Array.from({length: Math.min(4, first.totalPages - page + 1)}, (_, index) => page + index);
    const responses = await Promise.all(pages.map(number => fetchCmsArticles({type, q, page: number, pageSize: CMS_PAGE_SIZE, signal})));
    responses.forEach(response => articles.push(...response.articles));
  }
  return articles;
}

function articleHref(article: CmsArticleRecord): string {
  const section = article.type === 'case-study' ? '/case-studies' : article.type === 'ftv-101' ? '/ftv-101' : '/blog';
  return `${section}/${encodeURIComponent(article.slug)}`;
}

function displayDate(article: CmsArticleRecord): string {
  const value = article.publishedAt || article.date || article.updatedAt;
  if (!value) return '';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return '';
  return new Intl.DateTimeFormat('en', {month: 'long', day: 'numeric', year: 'numeric'}).format(parsed);
}

function CmsState({kind, back, retry, footer}: {kind: 'loading' | 'error' | 'missing'; back: string; retry?: () => void; footer: React.ReactNode}) {
  const copy = kind === 'loading'
    ? {eyebrow: 'FEEDTV RESOURCES', title: 'Loading published content…', detail: 'Connecting to the FeedTV AI CMS.'}
    : kind === 'missing'
      ? {eyebrow: '404 · NOT FOUND', title: 'This article isn’t available.', detail: 'It may have been unpublished or removed.'}
      : {eyebrow: 'CONNECTION ISSUE', title: 'We couldn’t load this article.', detail: 'Please check your connection and try again.'};
  return <><section className="ai-cms-message" aria-live="polite" aria-busy={kind === 'loading'}>
    <span className="eyebrow">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.detail}</p>
    <div className="ai-cms-message-actions">{retry && <button className="button" onClick={retry}>Try again</button>}<a className="back-link" href={back}>← &nbsp;Back to resources</a></div>
  </section>{footer}</>;
}

export function CmsListing({type, title, description}: {type?: CmsArticleType; title: string; description: string}) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(0);
  const [result, setResult] = useState<{status: 'loading' | 'ready' | 'error'; articles: CmsArticleRecord[]}>({status: 'loading', articles: []});
  const controllerRef = useRef<AbortController>();
  const requestId = useRef(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query.trim()), 250);
    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();
    controllerRef.current = controller;
    const id = ++requestId.current;
    let active = true;
    setResult({status: 'loading', articles: []});
    fetchAllCmsArticles(type, debouncedQuery, controller.signal).then(articles => {
      if (active && id === requestId.current) setResult({status: 'ready', articles});
    }).catch(() => {
      if (active && id === requestId.current) setResult({status: 'error', articles: []});
    });
    return () => {
      active = false;
      controller.abort();
    };
  }, [type, debouncedQuery, refresh]);

  const categories = Array.from(new Set(result.articles.map(article => article.category?.trim()).filter((value): value is string => Boolean(value))));
  const filtered = category ? result.articles.filter(article => article.category?.trim() === category) : result.articles;
  const pageCount = Math.max(1, Math.ceil(filtered.length / CMS_PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * CMS_PAGE_SIZE, currentPage * CMS_PAGE_SIZE);

  const changeQuery = (value: string) => {
    controllerRef.current?.abort();
    requestId.current++;
    setQuery(value);
    setCategory('');
    setPage(1);
    setResult({status: 'loading', articles: []});
  };
  const back = type === 'case-study' ? '/case-studies' : type === 'ftv-101' ? '/ftv-101' : type === 'blog' ? '/blog' : '/resources';

  if (result.status === 'loading') return <><section className="ai-cms-message" aria-live="polite" aria-busy="true"><span className="eyebrow">FEEDTV RESOURCES</span><h1>Loading published content…</h1><p>Connecting to the FeedTV AI CMS.</p></section><Footer/></>;
  if (result.status === 'error') return <CmsState kind="error" back={back} retry={() => setRefresh(value => value + 1)} footer={<Footer/>}/>;

  return <div className="ai-cms-page">
    <header className="ai-cms-listing-header"><span className="eyebrow">FEEDTV RESOURCES</span><h1>{title}</h1><p>{description}</p>
      <label className="ai-cms-search"><span className="sr-only">Search {title}</span><input type="search" value={query} onChange={event => changeQuery(event.target.value)} placeholder="Search articles…"/><span aria-hidden="true">⌕</span></label>
    </header>
    <section className="ai-cms-results" aria-label={title}>
      <div className="ai-cms-toolbar"><p aria-live="polite">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}</p>
        <div className="ai-cms-filters">
          {categories.length > 0 && <label>Category <select value={category} onChange={event => {setCategory(event.target.value); setPage(1);}}><option value="">All categories</option>{categories.map(item => <option key={item} value={item}>{item}</option>)}</select></label>}
          <button className="ai-cms-refresh" onClick={() => setRefresh(value => value + 1)}>Refresh articles</button>
        </div>
      </div>
      {filtered.length === 0
        ? <div className="ai-cms-empty" role="status"><h2>{result.articles.length === 0 ? 'No published articles yet.' : 'No articles in this category.'}</h2><p>{query ? 'Try another search, or clear the search to browse all published content.' : 'New published content will appear here.'}</p>{(query || category) && <button className="back-link" onClick={() => {changeQuery(''); setCategory('');}}>Clear filters</button>}</div>
        : <div className="ai-cms-grid">{visible.map(article => <a className="ai-cms-card" href={articleHref(article)} key={`${article.type}:${article.slug}`}>
          <div className="ai-cms-card-cover">{article.cover?.url ? <img src={article.cover.url} alt={article.cover.alt || ''} loading="lazy"/> : <span aria-hidden="true">FEEDTV</span>}</div>
          <div className="ai-cms-card-copy"><div className="ai-cms-card-meta">{article.category && <span className="ai-cms-category">{article.category}</span>}{displayDate(article) && <time>{displayDate(article)}</time>}</div><h2>{article.title}</h2>{article.dek && <p>{article.dek}</p>}<span className="ai-cms-read">Read article <span aria-hidden="true">↗</span></span></div>
        </a>)}</div>}
      {filtered.length > 0 && pageCount > 1 && <nav className="ai-cms-pagination" aria-label="Article pages"><button disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>← Previous</button><span>Page {currentPage} of {pageCount}</span><button disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)}>Next →</button></nav>}
    </section>
    <Footer/>
  </div>;
}

function ensureStylesheet() {
  const href = `${cmsUrl()}/article.css`;
  let link = document.getElementById('ai-cms-article-css') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id = 'ai-cms-article-css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  if (link.href !== href) link.href = href;
}

export function CmsArticle({slug, back}: {slug: string; back: string}) {
  const [retry, setRetry] = useState(0);
  const [state, setState] = useState<{status: 'loading'} | {status: 'missing' | 'error'} | {status: 'ready'; article: CmsEmbed}>({status: 'loading'});
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setState({status: 'loading'});
    ensureStylesheet();
    const url = `${cmsUrl()}/api/articles/${encodeURIComponent(slug)}/embed?back=${encodeURIComponent(back)}`;
    request(url, controller.signal).then(async response => {
      if (response.status === 404) return null;
      if (!response.ok) throw new Error(`AI CMS returned ${response.status}.`);
      return await response.json() as CmsEmbed;
    }).then(article => {
      if (!active) return;
      setState(article && typeof article.html === 'string' && article.html.length > 0 ? {status: 'ready', article} : {status: 'missing'});
    }).catch(() => {
      if (active) setState({status: 'error'});
    });
    return () => {
      active = false;
      controller.abort();
    };
  }, [slug, back, retry]);

  useEffect(() => {
    if (state.status === 'ready') document.title = `${state.article.title} | FeedTV`;
  }, [state]);

  if (state.status === 'loading') return <CmsState kind="loading" back={back} footer={<Footer/>}/>;
  if (state.status === 'missing') return <CmsState kind="missing" back={back} footer={<Footer/>}/>;
  if (state.status === 'error') return <CmsState kind="error" back={back} retry={() => setRetry(value => value + 1)} footer={<Footer/>}/>;
  return <div className="custom-article ai-cms-article"><div className="ai-cms-html" dangerouslySetInnerHTML={{__html: state.article.html}}/><Footer/></div>;
}

export function CmsAdmin() {
  const base = cmsUrl();
  useEffect(() => {
    if (base) window.location.replace(`${base}/admin`);
  }, [base]);
  if (base) return <section className="ai-cms-message" aria-live="polite"><span className="eyebrow">FEEDTV AI CMS</span><h1>Opening the CMS admin…</h1><p>If you are not redirected, open the configured CMS management panel.</p><a className="button" href={`${base}/admin`}>Open CMS admin</a></section>;
  return <><section className="ai-cms-message"><span className="eyebrow">FEEDTV AI CMS</span><h1>Configure the CMS to manage content.</h1><p>Set <code>window.FEEDTV_AI_CMS_URL</code> in <code>public/config.js</code> to your public CMS address. The site will then open that CMS’s <code>/admin</code> panel here.</p><a className="button" href="/">Back to FeedTV</a></section><Footer/></>;
}

export function cmsArticleHref(article: CmsArticleRecord): string {
  return articleHref(article);
}

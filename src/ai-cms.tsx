// Optional FeedTV AI CMS integration.
// Turn it on by setting window.FEEDTV_AI_CMS_URL in public/config.js; leave it empty and the site behaves exactly as before.
// - /blog/<slug>: the article comes from the AI CMS (its article template and styles), inside this site's nav and footer.
//   If the CMS doesn't have that slug, the built-in article (or the not-found page) is shown instead.
// - /blog: the article cards show the latest published CMS articles (category, title, excerpt, cover, link).
import React, {useEffect, useState} from 'react';

declare global {
  interface Window {FEEDTV_AI_CMS_URL?: string}
}

export const cmsUrl = (): string => (window.FEEDTV_AI_CMS_URL || '').trim().replace(/\/+$/, '');

type CmsCard = {
  slug: string;
  title: string;
  status: string;
  category?: string;
  dek?: string;
  cover?: {url: string; alt: string};
  date?: string;
  updatedAt?: string;
};
type CmsEmbed = {title: string; html: string};

const recency = (a: CmsCard) => a.date || a.updatedAt || '';

let listRequest: Promise<CmsCard[]> | undefined;
/** Published CMS articles, newest first (fetched once per page load). */
function cmsList(): Promise<CmsCard[]> {
  listRequest ??= fetch(cmsUrl() + '/api/articles')
    .then(r => (r.ok ? r.json() : {articles: []}))
    .then(d => ((d.articles || []) as CmsCard[]).filter(a => a.status === 'published').sort((x, y) => recency(y).localeCompare(recency(x))))
    .catch(() => []);
  return listRequest;
}

function ensureStylesheet() {
  if (document.getElementById('ai-cms-css')) return;
  const link = document.createElement('link');
  link.id = 'ai-cms-css';
  link.rel = 'stylesheet';
  link.href = cmsUrl() + '/article.css';
  document.head.appendChild(link);
}

export function CmsArticle({slug, fallback, footer}: {slug: string; fallback: React.ReactNode; footer: React.ReactNode}) {
  const [state, setState] = useState<'loading' | 'missing' | CmsEmbed>('loading');
  useEffect(() => {
    let alive = true;
    ensureStylesheet();
    fetch(`${cmsUrl()}/api/articles/${encodeURIComponent(slug)}/embed?back=/blog`)
      .then(r => (r.ok ? r.json() : null))
      .then((d: CmsEmbed | null) => alive && setState(d && d.html ? d : 'missing'))
      .catch(() => alive && setState('missing'));
    return () => {
      alive = false;
    };
  }, [slug]);
  useEffect(() => {
    if (typeof state === 'object') document.title = state.title + ' | FeedTV';
  }, [state]);
  if (state === 'loading') return <div className="ai-cms-loading" aria-busy="true" style={{minHeight: '70vh'}} />;
  if (state === 'missing') return <>{fallback}</>;
  // custom-article: same top offset under the fixed nav as the built-in article pages
  return (
    <div className="custom-article ai-cms-article">
      <div dangerouslySetInnerHTML={{__html: state.html}} />
      {footer}
    </div>
  );
}

/** On /blog, point the design's article cards at the latest CMS articles; cards beyond the CMS list are hidden. */
export function wireCmsBlogCards(root: HTMLElement) {
  cmsList().then(list => {
    if (!list.length || !root.isConnected) return;
    root.querySelectorAll<HTMLAnchorElement>('a[data-name^="Article ·"]').forEach((card, i) => {
      const a = list[i];
      if (!a) {
        card.style.display = 'none';
        return;
      }
      card.href = '/blog/' + a.slug;
      const chip = card.querySelector<HTMLElement>('[data-name="Category chip"] p');
      if (chip) {
        chip.textContent = (a.category || 'Blog').toUpperCase();
        chip.style.width = 'auto';
      }
      const [title, excerpt] = Array.from(card.querySelectorAll<HTMLElement>('[data-name="Text"] > p'));
      if (title) title.textContent = a.title;
      if (excerpt) {
        excerpt.textContent = a.dek || '';
        excerpt.style.display = a.dek ? '' : 'none';
      }
      const thumb = card.querySelector<HTMLElement>('[data-name^="Thumbnail"]');
      if (thumb && a.cover) {
        const img = document.createElement('img');
        img.src = a.cover.url;
        img.alt = a.cover.alt;
        img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover';
        thumb.replaceChildren(img);
      }
    });
  });
}

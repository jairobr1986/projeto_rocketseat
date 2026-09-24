import { chromium } from '@playwright/test';
import { writeFile } from 'node:fs/promises';

// Run against the local Astro server after changing translated headings.
const origin = process.env.PREVIEW_URL || 'http://127.0.0.1:4321';
const pages = [
  { path: '/', suffix: '' },
  { path: '/pt-pt/', suffix: '-pt-pt' },
  { path: '/en/', suffix: '-en' },
  { path: '/es/', suffix: '-es' },
];
const escape = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
const browser = await chromium.launch();
try {
  const context = await browser.newContext({
    viewport: { width: 1200, height: 630 },
    locale: 'pt-BR',
  });
  const page = await context.newPage();
  for (const item of pages) {
    await page.goto(new URL(item.path, origin).href);
    const content = await page.evaluate(() => ({
      lines: document.querySelector('h1').innerText.split('\n').filter(Boolean),
      subtitle: document.querySelector('.hero .eyebrow').textContent.trim(),
      services: Array.from(document.querySelectorAll('.service-card h3'))
        .map((el) => el.textContent)
        .join(' / '),
    }));
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#071c36"/><g font-family="Arial,Helvetica,sans-serif"><text x="65" y="95" fill="#439cf9" font-size="36" font-weight="700">&lt;/&gt; JBR1986</text><text x="65" y="175" fill="#89befa" font-size="17" letter-spacing="2">${escape(content.subtitle)}</text>${content.lines.map((line, i) => `<text x="60" y="${270 + i * 92}" fill="${i === 2 ? '#439cf9' : '#edf5ff'}" font-size="80" font-weight="700" letter-spacing="-3">${escape(line)}</text>`).join('')}<text x="65" y="550" fill="#89befa" font-size="23">${escape(content.services)}</text></g><path d="M65 580h1070" stroke="#1d64b5"/></svg>`;
    await writeFile(`public/social-card${item.suffix}.svg`, svg);
    await page.setContent(`<html><body style="margin:0">${svg}</body></html>`);
    await page.screenshot({ path: `public/social-card${item.suffix}.png` });
    console.log(`Generated social-card${item.suffix}.png`);
  }
} finally {
  await browser.close();
}

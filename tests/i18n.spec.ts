import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { matchLanguage } from '../src/i18n/locales';

const variants = [
  {
    path: '/',
    lang: 'pt-BR',
    browser: 'pt-BR',
    title: 'Seu negócio.',
    cta: 'Solicitar orçamento',
    phone: 'celular',
  },
  {
    path: '/pt-pt/',
    lang: 'pt-PT',
    browser: 'pt-PT',
    title: 'O seu negócio.',
    cta: 'Pedir orçamento',
    phone: 'telemóvel',
  },
  {
    path: '/en/',
    lang: 'en',
    browser: 'en-US',
    title: 'Your business.',
    cta: 'Request a quote',
    phone: 'mobile',
  },
  {
    path: '/es/',
    lang: 'es',
    browser: 'es-ES',
    title: 'Tu negocio.',
    cta: 'Pedir presupuesto',
    phone: 'móvil',
  },
];

test('páginas traduzidas funcionam sem JavaScript e mantêm o destino dos contatos', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    locale: 'en-US',
  });
  const page = await context.newPage();
  for (const variant of variants) {
    await page.goto(`http://127.0.0.1:4322${variant.path}`);
    await expect(page.locator('html')).toHaveAttribute('lang', variant.lang);
    await expect(page.locator('h1')).toContainText(variant.title);
    await expect(page.locator('.faq-list')).toContainText(variant.phone);
    await expect(page.locator('.hero-buttons .button')).toContainText(
      variant.cta,
    );
    const href = await page
      .locator('.hero-buttons .button')
      .getAttribute('href');
    expect(new URL(href!).pathname).toBe('/5519993515497');
    const text = new URL(href!).searchParams.get('text');
    expect(text).toContain(
      variant.lang === 'en'
        ? 'quote'
        : variant.lang === 'es'
          ? 'presupuesto'
          : 'orçamento',
    );
    await page.locator('.language-switcher summary').click();
    await expect(page.locator('.language-switcher a')).toHaveCount(4);
    await expect(
      page.locator('.language-switcher [aria-current="page"]'),
    ).toHaveAttribute('hreflang', variant.lang);
    await page.locator('.language-switcher a[hreflang="es"]').click();
    await expect(page).toHaveURL(/\/es\/$/);
  }
  await context.close();
});

test('sugestão segue o navegador sem redirecionar nem substituir links diretos', async ({
  browser,
}) => {
  for (const variant of variants) {
    const context = await browser.newContext({ locale: variant.browser });
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4322/');
    await expect(page).toHaveURL('http://127.0.0.1:4322/');
    const banner = page.locator('.language-suggestion');
    if (variant.lang === 'pt-BR') await expect(banner).toBeHidden();
    else {
      await expect(banner).toBeVisible();
      await expect(banner).toHaveAttribute('lang', variant.lang);
      await banner.locator('a').click();
      await expect(page).toHaveURL(`http://127.0.0.1:4322${variant.path}`);
      expect(
        await page.evaluate(() => localStorage.getItem('jbr-language')),
      ).toBe(variant.lang);
      await page.goto('http://127.0.0.1:4322/es/');
      await expect(page.locator('html')).toHaveAttribute('lang', 'es');
      await expect(banner).toHaveCount(0);
    }
    await context.close();
  }
});

test('escolha manual fica salva, mantém a seção e pode voltar para português', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/#servicos');
  await page.locator('.language-switcher summary').click();
  await page.locator('.language-switcher a[hreflang="en"]').click();
  await expect(page).toHaveURL(/\/en\/#servicos$/);
  expect(await page.evaluate(() => localStorage.getItem('jbr-language'))).toBe(
    'en',
  );
  await page.goto('/');
  await expect(page.locator('.language-suggestion')).toHaveAttribute(
    'lang',
    'en',
  );
  await page.locator('[data-language-dismiss]').click();
  await page.reload();
  await expect(page.locator('.language-suggestion')).toBeHidden();
  await page.locator('.language-switcher summary').click();
  await page.keyboard.press('Escape');
  await expect(page.locator('.language-switcher summary')).toBeFocused();
  await page.locator('.language-switcher summary').click();
  await page.locator('.language-switcher a[hreflang="es"]').click();
  await page.locator('.language-switcher summary').click();
  await page.locator('.language-switcher a[hreflang="pt-BR"]').click();
  await expect(page).toHaveURL('http://127.0.0.1:4322/');
  await expect(page.locator('.language-suggestion')).toBeHidden();
});

test('detecção tem fallback e funciona com armazenamento indisponível', async ({
  browser,
}) => {
  expect(matchLanguage(['fr-FR', 'es-MX'])).toBe('es');
  expect(matchLanguage(['en-GB', 'pt-PT'])).toBe('en');
  expect(matchLanguage(['pt'])).toBe('pt-BR');
  expect(matchLanguage(['pt-PT'])).toBe('pt-PT');
  expect(matchLanguage(['de-DE'])).toBe('pt-BR');
  const context = await browser.newContext({ locale: 'en-US' });
  await context.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new DOMException('Blocked', 'SecurityError');
      },
    });
    Object.defineProperty(window, 'sessionStorage', {
      get() {
        throw new DOMException('Blocked', 'SecurityError');
      },
    });
  });
  const page = await context.newPage();
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('http://127.0.0.1:4322/');
  await expect(page.locator('.language-suggestion')).toBeVisible();
  await page.locator('[data-language-suggestion]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  expect(errors).toEqual([]);
  await context.close();
});

test('seletor e textos traduzidos cabem em telas móveis e são acessíveis', async ({
  page,
}) => {
  for (const variant of variants) {
    for (const [width, height] of [
      [320, 640],
      [390, 844],
      [844, 390],
      [1440, 900],
    ]) {
      await page.setViewportSize({ width, height });
      await page.goto(variant.path);
      await page.locator('.language-switcher summary').click();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${variant.lang} at ${width}px`,
      ).toBe(true);
      const bounds = await page.locator('.language-switcher nav').boundingBox();
      expect(bounds!.x).toBeGreaterThanOrEqual(0);
      expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width);
      expect(
        (await page.locator('.language-switcher summary').boundingBox())!
          .height,
      ).toBeGreaterThanOrEqual(48);
    }
    await page.setViewportSize({ width: 390, height: 844 });
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      result.violations,
      `${variant.lang}: ${JSON.stringify(result.violations.map((v) => v.id))}`,
    ).toEqual([]);
  }
});

test('build com domínio e subdiretório gera canonical, hreflang e sitemap coerentes', async () => {
  const outDir = 'test-results/i18n-build';
  execFileSync(
    process.execPath,
    [
      'node_modules/astro/bin/astro.mjs',
      'build',
      '--site',
      'https://jbr1986.test',
      '--base',
      '/demo',
      '--outDir',
      outDir,
    ],
    { encoding: 'utf8', stdio: 'pipe' },
  );
  for (const variant of variants) {
    const html = readFileSync(join(outDir, variant.path, 'index.html'), 'utf8');
    expect(html).toContain(
      `rel="canonical" href="https://jbr1986.test/demo${variant.path}"`,
    );
    for (const other of variants)
      expect(html).toContain(
        `hreflang="${other.lang}" href="https://jbr1986.test/demo${other.path}"`,
      );
    expect(html).toContain(
      'hreflang="x-default" href="https://jbr1986.test/demo/"',
    );
    expect(html).toContain(`href="/demo${variant.path}#servicos"`);
  }
  const sitemap = readFileSync(join(outDir, 'sitemap.xml'), 'utf8');
  for (const variant of variants)
    expect(sitemap).toContain(
      `<loc>https://jbr1986.test/demo${variant.path}</loc>`,
    );
  expect(sitemap).not.toContain('404');
});

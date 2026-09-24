import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('conteúdo comercial, contatos preservados e navegação interna', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle(/JBR1986/);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(
    page
      .getByRole('link', { name: 'Solicitar orçamento', exact: true })
      .first(),
  ).toHaveAttribute('href', /^https:\/\/wa.me\/5519993515497\?text=/);
  for (const href of [
    'https://www.instagram.com/jairo.work/',
    'https://www.linkedin.com/in/jairobr1986/',
    'https://github.com/jairobr1986',
  ]) {
    expect(await page.locator(`a[href="${href}"]`).count()).toBeGreaterThan(0);
  }
  expect(
    await page
      .locator('a[href*="#"]')
      .evaluateAll((links) =>
        links
          .map((link) => (link as HTMLAnchorElement).hash)
          .filter(
            (hash) =>
              hash &&
              !document.getElementById(decodeURIComponent(hash.slice(1))),
          ),
      ),
  ).toEqual([]);
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
  const schema = JSON.parse(
    await page.locator('script[type="application/ld+json"]').innerText(),
  );
  expect(schema.name).toBe('JBR1986');
  expect(schema).not.toHaveProperty('aggregateRating');
  expect(errors).toEqual([]);
});

test('layout sem rolagem horizontal em celular, tablet e desktop', async ({
  page,
}) => {
  for (const [width, height] of [
    [320, 640],
    [360, 640],
    [390, 844],
    [430, 932],
    [844, 390],
    [768, 1024],
    [1024, 768],
    [1440, 900],
  ]) {
    await page.setViewportSize({ width, height });
    await page.goto('/');
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `overflow em ${width}px`,
    ).toBe(true);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('#contato')).toBeAttached();
  }
});

test('menu móvel, FAQ, tema persistente e teclado', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.locator('body')).not.toContainText('Jairo');
  const socialLinks = page.locator('.hero-socials a');
  await expect(socialLinks).toHaveCount(3);
  for (const link of await socialLinks.all()) {
    await expect(link.locator('svg')).toBeVisible();
    const box = await link.boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(48);
    expect(box?.width).toBeGreaterThanOrEqual(48);
  }
  await page.locator('.mobile-menu summary').click();
  await page
    .getByRole('navigation', { name: 'Navegação móvel' })
    .getByRole('link', { name: 'Serviços' })
    .click();
  await expect(page.locator('.mobile-menu')).not.toHaveAttribute('open', '');
  await expect(page).toHaveURL(/#servicos$/);
  await page.locator('.mobile-menu summary').click();
  await page.keyboard.press('Escape');
  await expect(page.locator('.mobile-menu summary')).toBeFocused();
  await page.locator('.faq-list summary').first().click();
  await expect(page.locator('.faq-list details').first()).toHaveAttribute(
    'open',
    '',
  );
  await page.getByRole('button', { name: 'Ativar tema escuro' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(
    page.getByRole('button', { name: 'Ativar tema claro' }),
  ).toHaveAttribute('aria-pressed', 'true');
});

test('acessibilidade automatizada nos dois temas', async ({ page }) => {
  await page.goto('/');
  for (const theme of ['light', 'dark']) {
    if (theme === 'dark')
      await page.getByRole('button', { name: 'Ativar tema escuro' }).click();
    await page.waitForTimeout(250);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      results.violations,
      JSON.stringify(
        results.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
      ),
    ).toEqual([]);
  }
});

test('conteúdo continua utilizável sem JavaScript e página 404 tem retorno', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4322/');
  await page.locator('.mobile-menu summary').click();
  await expect(
    page.getByRole('navigation', { name: 'Navegação móvel' }),
  ).toBeVisible();
  await page.locator('.faq-list summary').first().click();
  await expect(
    page.locator('.faq-list details').first().locator('p'),
  ).toBeVisible();
  await page.goto('http://127.0.0.1:4322/404.html');
  await expect(
    page.getByRole('link', { name: 'Voltar ao início' }),
  ).toHaveAttribute('href', '/');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'noindex, follow',
  );
  await context.close();
});

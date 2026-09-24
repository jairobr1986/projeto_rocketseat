import { test, expect } from '@playwright/test';

test('parceiros mantêm autoria correta, links externos e seção ao mudar idioma', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.locator('.mobile-menu summary').click();
  await page
    .getByRole('navigation', { name: 'Navegação móvel' })
    .getByRole('link', { name: 'Parceiros', exact: true })
    .click();
  await expect(page).toHaveURL(/#parceiros$/);
  await expect(page.locator('#parceiros')).toBeInViewport();
  for (const id of ['siriema', 'leo'])
    await expect(
      page.locator(`[data-partner="${id}"] .partner-credit`),
    ).toHaveText('Site desenvolvido pela JBR1986');
  await expect(
    page.locator('[data-partner="nuprinter"] .partner-credit'),
  ).toHaveText('Empresa parceira');
  await expect(page.locator('[data-partner="nuprinter"]')).not.toContainText(
    'desenvolvido pela JBR1986',
  );
  const urls = [
    'https://sitiocantodasiriema.com/',
    'https://leoconstrucoes.com.br/',
    'https://nuprinter.com.br/',
  ];
  for (const url of urls) {
    const link = page.locator(`#parceiros a[href="${url}"]`);
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }
  await page.locator('.language-switcher summary').click();
  await page.locator('.language-switcher a[hreflang="en"]').click();
  await expect(page).toHaveURL(/\/en\/#parceiros$/);
  await expect(
    page.locator('[data-partner="nuprinter"] .partner-credit'),
  ).toHaveText('Partner business');
  await expect(page.locator('#parceiros .partner-card')).toHaveCount(3);
});

export const locales = ['pt-BR', 'pt-PT', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const languageInfo: Record<
  Locale,
  {
    label: string;
    short: string;
    path: string;
    og: string;
    suggestion: string;
    action: string;
    dismiss: string;
  }
> = {
  'pt-BR': {
    label: 'Português (Brasil)',
    short: 'PT-BR',
    path: '',
    og: 'pt_BR',
    suggestion: 'Prefere português do Brasil?',
    action: 'Ver em português do Brasil',
    dismiss: 'Continuar neste idioma',
  },
  'pt-PT': {
    label: 'Português (Portugal)',
    short: 'PT-PT',
    path: 'pt-pt',
    og: 'pt_PT',
    suggestion: 'Prefere português de Portugal?',
    action: 'Ver em português de Portugal',
    dismiss: 'Continuar neste idioma',
  },
  en: {
    label: 'English',
    short: 'EN',
    path: 'en',
    og: 'en_US',
    suggestion: 'Would you prefer English?',
    action: 'View in English',
    dismiss: 'Keep this language',
  },
  es: {
    label: 'Español',
    short: 'ES',
    path: 'es',
    og: 'es_ES',
    suggestion: '¿Prefieres español?',
    action: 'Ver en español',
    dismiss: 'Seguir en este idioma',
  },
};
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale);
}
export function localePath(
  locale: Locale,
  base = import.meta.env.BASE_URL,
): string {
  const root = base.replace(/\/$/, '') + '/';
  return (
    root + (languageInfo[locale].path ? languageInfo[locale].path + '/' : '')
  );
}
export function matchLanguage(languages: readonly string[]): Locale {
  for (const language of languages) {
    const code = language.toLowerCase().replaceAll('_', '-');
    if (code === 'pt-pt' || code.startsWith('pt-pt-')) return 'pt-PT';
    if (code === 'pt' || code.startsWith('pt-')) return 'pt-BR';
    if (code === 'en' || code.startsWith('en-')) return 'en';
    if (code === 'es' || code.startsWith('es-')) return 'es';
  }
  return 'pt-BR';
}

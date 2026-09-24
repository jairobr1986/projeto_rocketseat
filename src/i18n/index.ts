import { site } from '../config/site';
import { ptBR } from './pt-br';
import { ptPT } from './pt-pt';
import { en } from './en';
import { es } from './es';
import type { Locale } from './locales';
export { localePath, locales, languageInfo } from './locales';
export type { Locale } from './locales';
export interface LocalizedProps {
  locale?: Locale;
}
const messages = { 'pt-BR': ptBR, 'pt-PT': ptPT, en, es };
export const getMessages = (locale: Locale = 'pt-BR') => messages[locale];
export const whatsappFor = (locale: Locale = 'pt-BR') =>
  `https://wa.me/${site.contact.number}?text=${encodeURIComponent(getMessages(locale).whatsappMessage)}`;

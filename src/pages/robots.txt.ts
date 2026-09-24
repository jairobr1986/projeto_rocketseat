import type { APIRoute } from 'astro';
import { base } from '../config/site';
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n${site ? `Sitemap: ${new URL(`${base}sitemap.xml`, site).href}\n` : ''}`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );

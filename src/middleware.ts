import createMiddleware from 'next-intl/middleware';
import {locales, pathnames} from "@/i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  pathnames: pathnames,
  // Used when no locale matches
  defaultLocale: 'hu'
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|hu)/:page*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};

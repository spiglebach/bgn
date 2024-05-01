import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {Pathnames} from "next-intl/navigation";

// Can be imported from a shared config
export const locales = ['en', 'hu'] as const;

export const pathnames = {
  '/': '/',
  '/occasions/new': '/occasions/new'
  // '/dogs': {
  //   hu: '/kutyák',
  //   en: '/dogs',
  //   it: '/cani'
  // }
} satisfies Pathnames<typeof locales>;

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;

import { SITE } from '~/config.mjs';
import { trim } from '~/utils/utils';

const trimSlash = (s: string) => trim(trim(s, '/'));

const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.basePathname;

/** */
export const getCanonical = (path = ''): string | URL => new URL(path, SITE.origin);

/** */
export const getPermalink = (slug = ''): string => {
  return createPath(BASE_PATHNAME, slug);
};

/** */
export const getHomePermalink = (): string => getPermalink('/');

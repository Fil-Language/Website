import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Fil',

  origin: 'https://fil.ktraini.com',
  basePathname: '/',
  trailingSlash: false,

  title: 'Fil',
  description:
    'Un langage de programmation pour développer des outils surpuissants',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'fr',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('fr', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  blog: {
    disabled: false,
    postsPerPage: 4,

    list: {
      pathname: 'doc', // doc main path
      noindex: false,
      disabled: false,
    },

    post: {
      pathname: 'doc', // value for /doc/some-post
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // set empty to change from /category/some-category to /some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;

import { AstroComponentFactory } from "astro/dist/runtime/server";

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;

  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;

  ogTitle?: string;
  ogType?: string;
}

export interface BlogProp {
  title: string;
  params?: { page: string | undefined };
  link?: string;
  content?: AstroComponentFactory;
  sub?: BlogProp[];
  subBase?: string;
}

export const blogParams = (blogs: BlogProp[], base = '') => {
  const params: { params: { page: string | undefined } }[] = [];

  for (const blog of blogs) {
    if (blog.params) {
      if (blog.params.page === undefined)
        params.push({ params: { page: base == '' ? undefined : base } })
      else
        params.push({ params: { page: base + blog.params.page } })
    }

    if (blog.sub) {
      params.push(...blogParams(blog.sub, base + blog.subBase + '/'))
    }
  }

  return params;
}
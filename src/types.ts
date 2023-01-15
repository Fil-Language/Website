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
  content?: AstroComponentFactory;
  sub?: BlogProp[];
}

export const blogParams = (blogs: BlogProp[]) => {
  const params: { params: { page: string | undefined } }[] = [];

  for (const blog of blogs) {
    if (blog.params) {
      if (blog.params.page === undefined)
        params.push({ params: { page: undefined } })
      else
        params.push({ params: { page: blog.params.page } })
    }

    if (blog.sub) {
      params.push(...blogParams(blog.sub))
    }
  }

  return params;
}

export const blogLink = (blog: BlogProp) => {
  if (blog.params) {
    if (blog.params.page === undefined) return "/"
    else return `/${blog.params.page}`
  }

  return "/"
}
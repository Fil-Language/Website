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
  params: { page: string | undefined };
  link?: string;
  content?: AstroComponentFactory;
  sub?: BlogProp[];
}
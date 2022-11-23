export type DirectoryRoutesType = 'about' | 'introduction' | 'components' | 'features' | 'getting-started' | 'styles';

export interface Page {
  content: string;
  meta: PageMeta;
}

export interface PageMeta {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
}

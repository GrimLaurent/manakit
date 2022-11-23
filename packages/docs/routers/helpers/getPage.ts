import { DirectoryRoutesType, Page } from '../types';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import getPath from './getPath';

const getPage = (slug: string, directory: DirectoryRoutesType): Page => {
  const postPath = path.join(getPath(directory), `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? '',
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
    },
  };
};

export default getPage;

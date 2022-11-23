import { DirectoryRoutesType } from '../types';
import getPage from './getPage';
import getSlugs from './getSlugs';

const getPages = (directory: DirectoryRoutesType) => {
  const pages = getSlugs(directory)
    .map((slug) => getPage(slug, directory))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();
  return pages;
};

export default getPages;

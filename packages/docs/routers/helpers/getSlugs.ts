import { sync } from 'glob';
import getPath from './getPath';
import { DirectoryRoutesType } from '../types';

const getSlugs = (directory: DirectoryRoutesType): string[] => {
  const paths = sync(`${getPath(directory)}/*.mdx`);

  return paths.map((path: any) => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split('.');
    return slug;
  });
};

export default getSlugs;

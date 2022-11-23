import {
  ABOUT_PATH,
  INTRODUCTION_PATH,
  COMPONENTS_PATH,
  FEATURES_PATH,
  GETTING_STARTED_PATH,
  STYLES_PATH,
} from '../routes';
import { DirectoryRoutesType } from '../types';

const getPath = (directory: DirectoryRoutesType) => {
  switch (directory) {
    case 'about':
      return ABOUT_PATH;
    case 'introduction':
      return INTRODUCTION_PATH;
    case 'components':
      return COMPONENTS_PATH;
    case 'features':
      return FEATURES_PATH;
    case 'getting-started':
      return GETTING_STARTED_PATH;
    case 'styles':
      return STYLES_PATH;
    default:
      return '';
  }
};

export default getPath;

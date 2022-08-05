import { ThemeApiType } from '../types';
import api from './api';

const updateApi = (data: any) => {
  let structure: ThemeApiType = api();
  // sys
  structure.sys.font = data.font;
  structure.sys.breakpoint = data.breakpoint.treshold;
  structure.sys.rounded = data.rounded;
  structure.sys.iconfont = data.icon.iconfont;
  // icon
  structure.icon = data.icon.value;
  // theme
  structure.themes = data.theme.themes;

  return structure;
};

export default updateApi;

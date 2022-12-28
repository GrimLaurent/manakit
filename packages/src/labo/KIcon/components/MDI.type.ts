import { ElementChildrenType } from '../../../types';

export class MDIClassType {
  styleList: object;
  dense?: boolean;
  disabled?: boolean;
  children?: ElementChildrenType;
  color?: string;
  dark?: boolean;
  light?: boolean;
  constructor(styleList = {}, children = undefined) {
    this.styleList = styleList;
    this.children = children;
  }
}

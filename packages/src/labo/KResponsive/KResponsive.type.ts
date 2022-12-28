import {
  ElementIdHTMLType,
  ElementClassHTMLType,
  ElementStyleHTMLType,
  ElementChildrenType,
  SizeType,
} from '../../types';

export class ResponsiveClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  width?: SizeType;
  height?: SizeType;
  minWidth?: SizeType;
  minHeight?: SizeType;
  maxWidth?: SizeType;
  maxHeight?: SizeType;
  aspectRatio?: string | number;
  contentClass?: string;
  fillHeight?: boolean;
  constructor(id = undefined, className = undefined, style = undefined, children = undefined) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
  }
}

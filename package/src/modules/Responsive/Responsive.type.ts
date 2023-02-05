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
  aspectRatio?: string | number;
  contentClass?: string;
  fillHeight?: boolean;
  // frame
  frame?: {
    width?: SizeType;
    height?: SizeType;
    minWidth?: SizeType;
    minHeight?: SizeType;
    maxWidth?: SizeType;
    maxHeight?: SizeType;
  };
  content?: {
    width?: SizeType;
    body?: ElementChildrenType;
  };
  constructor(id = undefined, className = undefined, style = undefined, children = undefined) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
  }
}

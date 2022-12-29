import {
  ElementIdHTMLType,
  ElementClassHTMLType,
  ElementStyleHTMLType,
  ElementChildrenType,
  SizeType,
  ElevationType,
} from '../../../types';

export class RectangleClassType {
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
  elevation?: ElevationType | boolean;
  color?: string;
  dark?: boolean;
  light?: boolean;
  constructor(id = undefined, className = undefined, style = undefined, children = undefined) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
  }
}

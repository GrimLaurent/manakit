import {
  ElementIdHTMLType,
  ElementClassHTMLType,
  ElementStyleHTMLType,
  ElementChildrenType,
  SizeType,
  ElevationType,
} from '../../../types';

export class CircleClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  size?: SizeType;
  minSize?: SizeType;
  maxSize?: SizeType;
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

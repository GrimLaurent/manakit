import {
  ElementIdHTMLType,
  ElementClassHTMLType,
  ElementStyleHTMLType,
  ElementChildrenType,
  SizeType,
} from '../../types';

export class LabelClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  // themes
  foregroundColor?: string | { color: string; opacity: number | string };
  backgroundColor?: string | { color: string; opacity: number | string };
  // display
  titleOnly?: boolean;
  iconOnly?: boolean;
  // icon
  icon?: {
    slot?: ElementChildrenType;
    position?: 'top' | 'bottom' | 'right' | 'left';
  };
  // frame
  frame?: {
    width?: SizeType;
    height?: SizeType;
    minWidth?: SizeType;
    minHeight?: SizeType;
    maxWidth?: SizeType;
    maxHeight?: SizeType;
  };
  // color
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  constructor(id = undefined, className = undefined, style = undefined, children = undefined) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
  }
}

import {
  ElementIdHTMLType,
  ElementClassHTMLType,
  ElementStyleHTMLType,
  ElementChildrenType,
  SizeType,
  ElevationType,
  RoundedBasicType,
} from '../../../types';

export class ToolbarClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  // themes
  foregroundColor?: string | { color: string; opacity: number | string };
  backgroundColor?: string | { color: string; opacity: number | string };

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
  //position
  fixed?: boolean;
  absolute?: boolean;

  // elevation
  elevation?: ElevationType | boolean;
  rounded?: RoundedBasicType | string | number;

  placement?: {
    position?: 'topBar' | 'bottomBar';
  };
  constructor(id = undefined, className = undefined, style = undefined, children = undefined) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
  }
}

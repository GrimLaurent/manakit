import {
  ElementIdHTMLType,
  ElementClassHTMLType,
  ElementStyleHTMLType,
  ElementChildrenType,
  SizeType,
} from '../../types';

export class ImgClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  src: string;
  alt?: string;
  aspectRatio?: string | number;
  contentClass?: string;
  fillHeight?: boolean;
  contain?: boolean;
  position?: string;
  // frame
  frame?: {
    width?: SizeType;
    height?: SizeType;
    minWidth?: SizeType;
    minHeight?: SizeType;
    maxWidth?: SizeType;
    maxHeight?: SizeType;
  };

  constructor(src = '') {
    this.src = src;
  }
}

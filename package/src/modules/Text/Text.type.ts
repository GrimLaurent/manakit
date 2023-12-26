import {
  ElementIdHTMLType,
  ElementClassHTMLType,
  ElementStyleHTMLType,
  ElementChildrenType,
  TypographyType,
  TypographyWeightType,
  TypographyAlignType,
  TypographyDecorationType,
  TypographyTransformType,
  TypographyDOMType,
  SizeType,
} from '../../types';

export class TextClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;

  // frame
  frame?: {
    width?: SizeType;
    height?: SizeType;
    minWidth?: SizeType;
    minHeight?: SizeType;
    maxWidth?: SizeType;
    maxHeight?: SizeType;
  };

  // font
  alt?: TypographyDOMType;
  italic?: boolean;
  font?: {
    default?: TypographyType;
    xs?: TypographyType;
    sm?: TypographyType;
    md?: TypographyType;
    lg?: TypographyType;
    xl?: TypographyType;
    weight?: TypographyWeightType;
    size?: number | string;
    decoration?: TypographyDecorationType;
    transform?: TypographyTransformType;
  };

  // alignement
  alignement?: {
    default?: TypographyAlignType;
    xs?: TypographyAlignType;
    sm?: TypographyAlignType;
    md?: TypographyAlignType;
    lg?: TypographyAlignType;
    xl?: TypographyAlignType;
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

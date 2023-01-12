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
} from '../../types';

export class TextClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  type?: TypographyType;
  xs?: TypographyType;
  sm?: TypographyType;
  md?: TypographyType;
  lg?: TypographyType;
  xl?: TypographyType;
  weight?: TypographyWeightType;
  italic?: boolean;
  align?: TypographyAlignType;
  alignXs?: TypographyAlignType;
  alignSm?: TypographyAlignType;
  alignMd?: TypographyAlignType;
  alignLg?: TypographyAlignType;
  alignXl?: TypographyAlignType;
  decoration?: TypographyDecorationType;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  transform?: TypographyTransformType;
  constructor(id = undefined, className = undefined, style = undefined, children = undefined) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
  }
}

import {
  ElementIdHTMLType,
  ElementClassHTMLType,
  ElementStyleHTMLType,
  ElementChildrenType,
  AlignType,
  AlignContentType,
  JustifyType,
} from '../../../types';

export class GridRowClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  dense?: boolean;
  noGutters?: boolean;
  align?: AlignType;
  alignXs?: AlignType;
  alignSm?: AlignType;
  alignMd?: AlignType;
  alignLg?: AlignType;
  alignXl?: AlignType;
  alignContent?: AlignContentType;
  alignContentXs?: AlignContentType;
  alignContentSm?: AlignContentType;
  alignContentMd?: AlignContentType;
  alignContentLg?: AlignContentType;
  alignContentXl?: AlignContentType;
  justify?: JustifyType;
  justifyXs?: JustifyType;
  justifySm?: JustifyType;
  justifyMd?: JustifyType;
  justifyLg?: JustifyType;
  justifyXl?: JustifyType;
  constructor(id = undefined, className = undefined, style = undefined, children = undefined) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
  }
}

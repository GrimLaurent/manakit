import { ElementHTMLDefaultType_Extended, AlignType, AlignContentType, JustifyType } from '../../../../types';

interface ModuleCustomType {
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
}

export interface GridRowType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}

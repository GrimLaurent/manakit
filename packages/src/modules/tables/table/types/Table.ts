import { ElementHTMLDefaultType_Extended, SizeType } from '../../../../types';

interface ModuleCustomType {
  height?: SizeType;
  fixedHeader?: boolean;
  dense?: boolean;
}

export interface TableType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}

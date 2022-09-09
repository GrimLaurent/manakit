import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  model?: any;
  contentClass?: string;
  disabled?: boolean;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  nudgeBottom?: number | string;
  nudgeLeft?: number | string;
  nudgeRight?: number | string;
  nudgeTop?: number | string;
  rounded?: 'none' | 'xs' | 'sm' | 'lg' | 'xl';
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  zIndex?: number | string;
  closeOnContentClick?: boolean;
  activator?: React.ReactNode;
  pointer?: boolean;
}

export interface MenuType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}

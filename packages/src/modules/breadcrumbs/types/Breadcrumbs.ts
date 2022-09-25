import { ElementHTMLDefaultType, ElementClassHTMLType } from '../../../types';

export type ItemType = { text: string; href: string; disabled: boolean };

interface ModuleCustomType {
  items?: Array<ItemType>;
  itemClass?: ElementClassHTMLType;
  divider?: string;
  large?: boolean;
}

export interface BreadcrumbsType extends ModuleCustomType, ElementHTMLDefaultType {}

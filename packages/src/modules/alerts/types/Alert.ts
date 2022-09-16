import { ElementHTMLDefaultType_Extended, ElementClassHTMLType } from '../../../types';

interface ModuleCustomType {
  type?: 'succes' | 'info' | 'warning' | 'error';
  icon?: any;
  border?: 'left' | 'right' | 'top' | 'bottom';
  colorBorder?: boolean;
  elevation?: number | string;
  dismissible?: boolean;
  model?: boolean;
  dense?: boolean;
  outlined?: boolean;
  text?: boolean;
  shaped?: boolean;
}

export interface AlertType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}

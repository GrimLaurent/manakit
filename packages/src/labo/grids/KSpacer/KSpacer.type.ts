import { ElementIdHTMLType, ElementClassHTMLType, ElementStyleHTMLType } from '../../../types';

export class SpacerClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  constructor(id = undefined, className = undefined, style = undefined) {
    this.id = id;
    this.className = className;
    this.style = style;
  }
}

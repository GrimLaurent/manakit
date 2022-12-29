// global configuration types for Dom elements ( ID , class etc ...)
import { CSSProperties } from 'react';

export type ElementIdHTMLType = string;
export type ElementClassHTMLType = React.HTMLAttributes<HTMLDivElement> | string;
export type ElementStyleHTMLType = CSSProperties;
export type ElementChildrenType = React.ReactNode | React.ReactChild[];

export interface ElementHTMLDefaultType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
}

export interface ElementHTMLDefaultRequiredType {
  id: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
}

export interface ElementHTMLDefaultType_Extended {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
}

export interface ElementHTMLDefaultRequiredType_Extended {
  id: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
}

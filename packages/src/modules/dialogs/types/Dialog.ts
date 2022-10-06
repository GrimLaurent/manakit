import { ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  open?: boolean;
  close?: Function;
  fullscreen?: boolean;
  permanent?: boolean;
}

export interface DialogType
  extends ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}

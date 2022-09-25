export type SizeType = string | number;

export interface ElementSizeDefaultType {
  width?: SizeType;
  height?: SizeType;
}

export interface ElementSizeMinDefaultType {
  minWidth?: SizeType;
  minHeight?: SizeType;
}

export interface ElementSizeMaxDefaultType {
  maxWidth?: SizeType;
  maxHeight?: SizeType;
}

export interface ElementSizeDefaultType_Extended {
  width?: SizeType;
  height?: SizeType;
  minWidth?: SizeType;
  minHeight?: SizeType;
  maxWidth?: SizeType;
  maxHeight?: SizeType;
}

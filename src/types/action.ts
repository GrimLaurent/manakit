export type ElementOnClickType =
  | React.MouseEventHandler<HTMLAnchorElement>
  | React.MouseEventHandler<HTMLButtonElement>;

export interface ElementActionOnClikType {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ElementActionHrefType {
  href?: string;
  target?: string;
}

export interface ElementActionType_Extend {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  target?: string;
}

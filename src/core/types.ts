export interface ThemeApiType {
  sys: {
    font: keyObjectType;
    iconfont: string;
    rounded: keyObjectType;
    breakpoint: keyObjectType;
  };
  themes: keyObjectType;
  icon: keyObjectType;
  pkg: keyObjectType;
}

export type keyObjectType = {
  [key: string]: any;
};

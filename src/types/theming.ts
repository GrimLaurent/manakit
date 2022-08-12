export interface DefaultThemeType {
  name: string;
  font: {
    [key: string]: string;
  };
  icon: {
    iconfont: string;
    value: {
      [key: string]: string;
    };
  };
  theme: {
    dark: boolean;
    themes: {
      [key: string]: {
        [key: string]: string;
      };
    };
    options: {
      customProperties: boolean;
      themeCache: boolean;
    };
  };
  breakpoint: {
    treshold: {
      [key: string]: string;
    };
  };
  rounded: {
    [key: string]: string;
  };
}

export interface DarkLightType {
  dark?: boolean;
  light?: boolean;
}

export interface ThemeApiType {
  icon: {};
  pkg: {};
  sys: {
    font: keyObjectType;
    iconfont: keyObjectType;
    rounded: keyObjectType;
    breakpoint: keyObjectType;
  };
  themes: {
    light: keyObjectType;
    dark: keyObjectType;
  };
}

type keyObjectType = {
  [key: string]: any;
};

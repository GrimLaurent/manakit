export interface ManakitPreset {
  ssr: boolean;
  theme: {
    default: 'light' | 'dark';
    disable: boolean;
    themes: {
      light: {
        [key: string]: string;
      };
      dark: {
        [key: string]: string;
      };
    };
  };
}

export interface UserPreset {
  ssr?: boolean;
  theme?: {
    default?: 'light' | 'dark';
    disable?: boolean;
    themes?: {
      light?: {
        [key: string]: string;
      };
      dark?: {
        [key: string]: string;
      };
    };
  };
}

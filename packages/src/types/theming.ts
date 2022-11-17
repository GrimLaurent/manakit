export interface ManakitPreset {
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

import { concatObject } from '../../utils';

export const generateTheme = (theme?: ManakitType) => {
  console.log('generateTheme', theme);
  let simpleTheme = preset.theme.themes.light; // use if theme is disable
  let lightTheme = preset.theme.themes.light;
  let darkTheme = preset.theme.themes.dark;
  let defaultTheme = preset.theme.default;
  let disableTheme = preset.theme.disable;

  if (theme && theme.theme) {
    if (theme.theme.disable !== undefined) disableTheme = theme.theme.disable;
    if (theme.theme.default) defaultTheme = theme.theme.default;
  }

  if (disableTheme) {
    // Dark / Light not use
    if (theme && theme.theme && theme.theme.themes && theme.theme.themes.default) {
      simpleTheme = concatObject(simpleTheme, theme.theme.themes.default);
    }

    for (const [key, value] of Object.entries(simpleTheme)) {
      createClass(`.mk-app .${key}`, `background-color: ${value} !important; border-color: ${value} !important;`);
      createClass(`.mk-app .${key}--text`, `color: ${value} !important; caret-color: ${value} !important;`);
    }

    // End config
    return {
      default: defaultTheme,
    };
  } else {
    if (theme && theme.theme && theme.theme.themes) {
      if (theme.theme.themes.light && Object.keys(theme.theme.themes.light).length > 0) {
        lightTheme = concatObject(lightTheme, theme.theme.themes.light);
      }

      if (theme.theme.themes.dark && Object.keys(theme.theme.themes.dark).length > 0) {
        darkTheme = concatObject(darkTheme, theme.theme.themes.dark);
      }
    }

    for (const [key, value] of Object.entries(lightTheme)) {
      createClass(
        `.mk-app.theme--light .${key}`,
        `background-color: ${value} !important; border-color: ${value} !important;`,
      );
      createClass(
        `.mk-app.theme--light .${key}--text`,
        `color: ${value} !important; caret-color: ${value} !important;`,
      );
    }
    for (const [key, value] of Object.entries(darkTheme)) {
      createClass(
        `.mk-app.theme--dark .${key}`,
        `background-color: ${value} !important; border-color: ${value} !important;`,
      );
      createClass(`.mk-app.theme--dark .${key}--text`, `color: ${value} !important; caret-color: ${value} !important;`);
    }

    // End config [light/dark]
    return {
      default: defaultTheme,
    };
  }
};

function createClass(name: any, rules: any) {
  var style: any = document.createElement('style');
  style.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(style);
  if (!(style.sheet || {}).insertRule) (style.styleSheet || style.sheet).addRule(name, rules);
  else style.sheet.insertRule(name + '{' + rules + '}', 0);
}

const preset: PresetType = {
  theme: {
    default: 'light',
    disable: false,
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
};

interface PresetType {
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

interface ManakitType {
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
      default?: {
        [key: string]: string;
      };
    };
  };
}

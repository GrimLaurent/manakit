import React, { FunctionComponent, useEffect, useState, Fragment } from 'react';
import GlobalStyle from '../../../assets/styles/globalStyles';
import { AppType } from '../types/App.types';
import { ApplicationStyled, ApplicationWrapsStyled } from '../styles/App.styled';
import { concatObject, useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

// Theme
import { ThemeProvider } from 'styled-components';
import { ModeApi, ThemeApi, updateMode } from '../../../core';
import { getElementStorage } from '../../../utils';

import { core } from '../../../newcore';

const Structural: FunctionComponent<AppType> = ({ theme, className, style, children, dark, light }) => {
  const [mode, setMode]: any = useState(false);

  // WIP

  console.log('core', core(theme));

  // WIP END
  useEffect(() => {
    console.log('local', localStorage.getItem('_muid'));
    // if (dark === undefined && light === undefined) {
    //   const storage = getElementStorage('_muid');
    //   if (storage) setMode(storage.theme.dark);
    // } else {
    if (dark) setMode(true);
    if (light) setMode(false);
    // }

    console.log('Manakit theming', theme);
  }, []);

  const updateTheme = () => {
    const storage = getElementStorage('_muid');
    setMode(storage.theme.dark);
    updateMode();

    //window.removeEventListener('mana-theme', updateTheme);
  };

  //window.addEventListener('mana-theme', updateTheme);

  return (
    <Fragment>
      <ThemeProvider theme={core(theme)}>
        <GlobalStyle />
        <ApplicationStyled
          id={useIdHtml('mk')}
          className={useClassHtml(`mk-app`, className)}
          style={useStyleHtml({}, style)}
          data-app="true"
          mode={Boolean(mode) ? 'dark' : 'light'}
        >
          <ApplicationWrapsStyled className={useClassHtml(`mk-app--wrap`)}>{children}</ApplicationWrapsStyled>
        </ApplicationStyled>
      </ThemeProvider>
    </Fragment>
  );
};

export default Structural;

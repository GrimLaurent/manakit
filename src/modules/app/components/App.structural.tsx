import React, { FunctionComponent, useEffect, useState, useContext, Fragment } from 'react';
import GlobalStyle from '../../../assets/styles/globalStyles';
import { AppType } from '../types/App.types';
import { Application, ApplicationWrap } from '../styles/App.styled';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

// Theme
import { ThemeProvider } from 'styled-components';
import { ModeApi, ThemeApi, updateMode } from '../../../core';
import { getElementStorage } from '../../../utils';

const Structural: FunctionComponent<AppType> = ({ className, style, children, dark, light }) => {
  const theme = useContext(ThemeApi);
  const [mode, setMode]: any = useState(useContext(ModeApi));

  useEffect(() => {
    if (dark === undefined && light === undefined) {
      const storage = getElementStorage('_muid');
      if (storage) setMode(storage.theme.dark);
    } else {
      if (dark) setMode(true);
      if (light) setMode(false);
    }
  }, []);

  const updateTheme = () => {
    const storage = getElementStorage('_muid');
    setMode(storage.theme.dark);
    updateMode();

    window.removeEventListener('mana-theme', updateTheme);
  };

  window.addEventListener('mana-theme', updateTheme);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Application
          id={useIdHtml('manakit-app')}
          className={useClassHtml(`mk-app theme--${Boolean(mode) ? 'dark' : 'light'}`, className)}
          style={useStyleHtml({}, style)}
          data-app="true"
          mode={Boolean(mode) ? 'dark' : 'light'}
        >
          <ApplicationWrap className={useClassHtml(`mk-app__wrap`)}>{children}</ApplicationWrap>
        </Application>
      </ThemeProvider>
    </Fragment>
  );
};

export default Structural;

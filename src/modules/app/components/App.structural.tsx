import React, { FunctionComponent, useEffect, useState, Fragment } from 'react';
import GlobalStyle from '../../../assets/styles/globalStyles';
import { AppType } from '../types/App.types';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

// Theme
import { core } from '../../../core';
import { ThemeProvider } from 'styled-components';

const Structural: FunctionComponent<AppType> = ({ theme, className, style, children, dark }) => {
  const [mode, setMode]: any = useState(undefined);

  useEffect(() => {
    if (dark === true) setMode('dark');
    else if (dark === false) setMode('light');
    else setMode(undefined);
  }, [dark]);

  return (
    <Fragment>
      <ThemeProvider theme={core(theme, mode)}>
        <GlobalStyle />
        <div
          id={useIdHtml('mk')}
          className={useClassHtml(`mk-app`, className)}
          style={useStyleHtml({}, style)}
          data-app="true"
        >
          <div className={useClassHtml(`mk-app--wrap`)}>{children}</div>
        </div>
      </ThemeProvider>
    </Fragment>
  );
};

export default Structural;

import React, { FunctionComponent, useEffect, useState, Fragment } from 'react';
import GlobalStyle from '../../../assets/styles/globalStyles';
import { AppType } from '../types/App.types';
import { ApplicationStyled, ApplicationWrapsStyled } from '../styles/App.styled';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

// Theme
import { core } from '../../../newcore';
import { ThemeProvider } from 'styled-components';

const Structural: FunctionComponent<AppType> = ({ theme, className, style, children, dark }) => {
  return (
    <Fragment>
      <ThemeProvider theme={core(theme, dark === true ? 'dark' : dark === false ? 'light' : undefined)}>
        <GlobalStyle />
        <ApplicationStyled
          id={useIdHtml('mk')}
          className={useClassHtml(`mk-app`, className)}
          style={useStyleHtml({}, style)}
          data-app="true"
        >
          <ApplicationWrapsStyled className={useClassHtml(`mk-app--wrap`)}>{children}</ApplicationWrapsStyled>
        </ApplicationStyled>
      </ThemeProvider>
    </Fragment>
  );
};

export default Structural;

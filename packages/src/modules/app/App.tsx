/**
 * App
 *
 * @description App is a basic module that allows you to display content in line with the manakit theme and to ensure the effects of transitions and placement for the content.
 * @type Structural
 * @module App
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import '../../assets/scss/main.scss';
import './App.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { AppType } from './types/App';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';

import Theme from '../../services/theme';
import { preset } from '../../presets/default';

const App: FunctionComponent<AppType> = ({ id, className, style, children, noSSR, theme, isDark }) => {
  if (noSSR) {
    const [render, setRender] = useState(null) as any;

    useEffect(() => {
      // fix Hydration failed because the initial UI does not match what was rendered on the server
      setRender(
        <Structural id={id} className={className} style={style} theme={theme} isDark={isDark}>
          {children}
        </Structural>,
      );
    }, []);

    return render;
  } else {
    return (
      <Structural id={id} className={className} style={style} theme={theme} isDark={isDark}>
        {children}
      </Structural>
    );
  }
};

export default App;

/**
 * Structural
 * @param className
 * @param style
 * @param children
 * @param theme
 * @param isDark
 * @returns React.ReactNode | React.ReactChild[]
 */
const Structural: FunctionComponent<AppType> = ({ id, className, style, children, theme, isDark }) => {
  const [useTheme, setUseTheme] = useState('');

  const styleList = {
    transformOrigin: 'center top 0px',
  };

  useEffect(() => {
    // theming
    let useTheme = preset.theme.default; // default

    if (theme?.theme?.default && isDark === undefined) {
      useTheme = theme?.theme?.default;
    } else if (isDark !== undefined) {
      isDark ? (useTheme = 'dark') : 'light';
    }

    setUseTheme(useTheme);

    // generate theme (scss/css)
    Theme(theme, isDark);
  }, [theme, isDark]);

  useEffect(() => {
    // control size appbar for generate spacing
    console.log('HTML init mk-appbar', getElHTMLHeight('mk-app-bar--fixed'));
    console.log('HTML init mk-footer', getElHTMLHeight('mk-footer--fixed'));
    console.log('HTML init mk-navigation', getElHTMLWidth('mk-navigation-drawer--open'));

    window.addEventListener('resize', () => {
      console.log('HTML event mk-appbar', getElHTMLHeight('mk-app-bar--fixed'));
      console.log('HTML event mk-footer', getElHTMLHeight('mk-footer--fixed'));
      console.log('HTML event mk-navigation', getElHTMLWidth('mk-navigation-drawer--open'));
    });
  }, []);

  function getElHTMLHeight(el: string) {
    const appbarList = document.getElementsByClassName(el);
    if (appbarList && appbarList[0]?.clientHeight) return appbarList[0]?.clientHeight;
    else return 0;
  }

  function getElHTMLWidth(el: string) {
    const appbarList = document.getElementsByClassName(el);
    if (appbarList && appbarList[0]?.clientHeight) return appbarList[0]?.clientWidth;
    else return 0;
  }

  return (
    <Fragment>
      <div
        id={useIdHtml('app', id)}
        className={useClassHtml(`mk-app theme--${useTheme}`, className)}
        style={useStyleHtml(styleList, style)}
        data-app="true"
      >
        <div className={`mk-app--wrap`}>{children}</div>
      </div>
    </Fragment>
  );
};

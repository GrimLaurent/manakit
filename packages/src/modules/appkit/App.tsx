/**
 * Appkit
 *
 * @description Appkit is a basic module that allows you to display content in line with the manakit theme and to ensure the effects of transitions and placement for the content.
 * @type Structural
 * @module Appkit
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import '../../assets/scss/main.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { AppType } from './types/App';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';

import Theme from '../../services/theme';
import { preset } from '../../presets/default';

const Appkit: FunctionComponent<AppType> = ({ id, className, style, children, theme, isDark }) => {
  if (theme?.ssr !== undefined ? theme?.ssr : preset.ssr) {
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

export default Appkit;

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

  return (
    <Fragment>
      <div
        id={useIdHtml('app', id)}
        className={useClassHtml(`k-application theme--${useTheme}`, className)}
        style={useStyleHtml(styleList, style)}
        data-app="true"
      >
        <div className={`k-application--wrap`}>{children}</div>
      </div>
    </Fragment>
  );
};

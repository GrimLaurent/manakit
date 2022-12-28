/**
 * App
 *
 * @description App is a basic module that allows you to display content in line with the ManaKit theme and to ensure the effects of transitions and placement for the content.
 * @type Structural
 * @module App
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import '../../assets/scss/main.scss';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { AppType } from './types';

import Theme from '../../services/theme';
import { preset } from '../../presets/default';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';

const App: FunctionComponent<AppType> = ({ id, className, style, children, set, isDark }) => {
  const [render, setRender] = useState(null) as any;
  const [useTheme, setUseTheme] = useState('');

  const styleList = {
    transformOrigin: 'center top 0px',
  };

  const body = (
    <div
      id={useIdHtml('app', id)}
      className={useClassHtml(`manakit k-application theme--${useTheme}`, className)}
      style={useStyleHtml(styleList, style)}
      data-app="true"
    >
      <div className={`k-application--wrap`}>{children}</div>
    </div>
  );

  useEffect(() => {
    // theming
    let useTheme = preset.theme.default; // default

    if (set?.theme?.default && isDark === undefined) {
      useTheme = set?.theme?.default;
    } else if (isDark !== undefined) {
      isDark ? (useTheme = 'dark') : 'light';
    }

    setUseTheme(useTheme);

    // generate theme (scss/css)
    Theme(set, isDark);
  }, [set, isDark]);

  if (set?.ssr !== undefined ? set?.ssr : preset.ssr) {
    useEffect(() => {
      // fix Hydration failed because the initial UI does not match what was rendered on the server
      setRender(body);
    }, []);

    return render;
  } else {
    return body;
  }
};

export default App;

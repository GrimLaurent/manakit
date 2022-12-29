/**
 * App
 * @description App is a basic module that allows you to display content in line with the ManaKit theme and to ensure the effects of transitions and placement for the content.
 * @type Structural
 * @module App
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 - 2023 Manastone and the ManaKit project authors
 */

import React, { FunctionComponent, useEffect, useState } from 'react';
import { AppClassType } from './App.type';

// styles
import './App.scss';

// services
import Theme from '../../services/theme';
import { preset } from '../../presets/default';

// utilities
import { useId, useClassName, useStyle } from '../../utils/dom';

const App: FunctionComponent<AppClassType> = (props) => {
  const { id, className, style, children, set, isDark } = props;
  const [render, setRender]: Array<any> = useState(undefined);
  const [useTheme, setUseTheme] = useState('');

  const styleList = {
    transformOrigin: 'center top 0px',
  };

  const body = (
    <div
      id={useId('app', id)}
      className={useClassName(`k-application theme--${useTheme}`, className)}
      style={useStyle(styleList, style)}
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

  // render
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

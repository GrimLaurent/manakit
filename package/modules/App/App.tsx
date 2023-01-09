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
  const { id, className, style, children, set, colorScheme } = props;
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
    if (colorScheme === 'auto') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setUseTheme('dark');
      } else {
        setUseTheme('false');
      }

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        setUseTheme(event.matches ? 'dark' : 'light');
      });
    } else {
      if (colorScheme) {
        setUseTheme(colorScheme);
      } else if (set?.theme?.default !== undefined) {
        setUseTheme(set?.theme?.default as never);
      } else {
        setUseTheme(preset.theme.default); // default
      }
    }
  }, [set, colorScheme]);

  useEffect(() => {
    // generate theme (scss/css)
    Theme(set, useTheme === 'dark');
  }, [useTheme]);

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

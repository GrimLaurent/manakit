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

import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import {
  UserPreset,
  ElementIdHTMLType,
  ElementClassHTMLType,
  ElementStyleHTMLType,
  ElementChildrenType,
  ColorScheme,
} from '../../../types';

// styles
import './App.scss';

// services
import Theme from '../../../services/theme';
import colorScheme from '../../../services/colorScheme';
import { preset } from '../../../presets/default';

// utilities
import { useClassName, useStyle } from '../../../utils/dom';

const Application: FunctionComponent<ApplicationClassType> = ({
  id = '__manakit',
  className,
  style,
  children,
  set,
  mode,
}) => {
  const [hydrated, setHydrated] = React.useState(false);
  const [useTheme, setUseTheme] = useState('');

  const styleList = {
    transformOrigin: 'center top 0px',
  };

  React.useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);

  useEffect(() => {
    // get color browser or config for display good theme ('dark' / 'light')
    setUseTheme(colorScheme(set, mode));
  }, [set, mode]);

  useEffect(() => {
    // generate theme (scss/css)
    Theme(set, useTheme === 'dark');
  }, [useTheme]);

  // render
  if (set?.ssr !== undefined ? set?.ssr : preset.ssr) {
    if (!hydrated) {
      // Returns null on first render, so the client and server match
      return null;
    }
  }

  return (
    <Fragment>
      <div
        id={id}
        className={useClassName(`mkt-application theme--${useTheme}`, className)}
        style={useStyle(styleList, style)}
        data-app="true"
      >
        <div className={`mkt-application--wrap`}>
          <Fragment>{children}</Fragment>
        </div>
      </div>
    </Fragment>
  );
};

class ApplicationClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  set?: UserPreset;
  mode?: ColorScheme;
}

export default Application;

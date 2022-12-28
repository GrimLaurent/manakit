/**
 * Appbar
 *
 * @type Structural
 * @module Toolbar
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Appbar.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { AppbarType } from './types/Appbar';
import { useClassHtml } from '../../../utils';

// dependencies
import { Toolbar } from '../../toolbars';

const Appbar: FunctionComponent<AppbarType> = ({
  id,
  className,
  style,
  children,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  absolute,
  bottom,
  dense,
  flat,
  floating,
  elevation,
  outlined,
  rounded,
  shaped,
  tile,
  fixed,
  app,
}) => {
  const classList = [
    { el: 'mk-app-bar--fixed', val: fixed },
    { el: 'mk-app-bar--fixed', val: app },
  ];

  return (
    <Fragment>
      <Toolbar
        id={id}
        className={useClassHtml('mk-app-bar', className, classList)}
        style={style}
        width={width}
        height={height}
        minWidth={minWidth}
        maxWidth={maxWidth}
        minHeight={minHeight}
        maxHeight={maxHeight}
        absolute={absolute}
        bottom={bottom}
        dense={dense}
        flat={flat}
        floating={floating}
        elevation={elevation}
        outlined={outlined}
        rounded={rounded}
        shaped={shaped}
        tile={tile}
      >
        {children}
      </Toolbar>
    </Fragment>
  );
};

export default Appbar;

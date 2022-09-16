/**
 * NavigationDrawer
 *
 * @type Structural
 * @module NavigationDrawer
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './NavigationDrawer.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { NavigationDrawerType } from './types/NavigationDrawer';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../utils';

// dependencies
import Overlay from '../overlay';

const NavigationDrawer: FunctionComponent<NavigationDrawerType> = ({
  id,
  className,
  style,
  children,
  absolute,
  fixed,
  height,
  width,
  bottom,
  right,
  value,
  temporary,
  app,
}) => {
  const classList = [
    { el: 'navigation-drawer--absolute', val: absolute },
    { el: 'navigation-drawer--fixed', val: fixed },
    { el: 'navigation-drawer--fixed', val: app },
    { el: 'navigation-drawer--right', val: right },
    { el: 'navigation-drawer--bottom', val: bottom },
    { el: 'navigation-drawer--temporary', val: temporary },
    { el: 'is--open', val: value },
    { el: 'is--close', val: (value === false && temporary === undefined) || temporary === false },
  ];

  const styleList = {
    height: useSizeHtml(height),
    width: useSizeHtml(width),
  };

  return (
    <Fragment>
      {temporary ? <Overlay value={value} absolute={absolute || fixed} /> : ''}
      <nav
        id={useIdHtml(id)}
        className={useClassHtml('mk-navigation-drawer', className, classList)}
        style={useStyleHtml(styleList, style)}
        key={'navigation-drawer'}
      >
        <div className="mk-navigation-drawer--wrap">{children}</div>
        <div className="mk-navigation-drawer--border"></div>
      </nav>
    </Fragment>
  );
};

NavigationDrawer.displayName = 'NavigationDrawer';

export default NavigationDrawer;

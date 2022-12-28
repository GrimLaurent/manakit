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
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
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
  const [forceOpen, setForceOpen] = useState(false);
  const [paramStyleAppBar, setParamStyleAppBar] = useState(0);
  const [paramStyleFooter, setParamStyleFooter] = useState(0);

  const classList = [
    { el: 'mk-navigation-drawer--absolute', val: absolute },
    { el: 'mk-navigation-drawer--fixed', val: fixed },
    { el: 'mk-navigation-drawer--fixed', val: app },
    { el: 'navigation-drawer--right', val: right },
    { el: 'navigation-drawer--bottom', val: bottom },
    { el: 'navigation-drawer--temporary', val: temporary },
    { el: 'is--open', val: value },
    { el: 'mk-navigation-drawer--open', val: forceOpen }, // with props app
    { el: 'is--close', val: (value === false && temporary === undefined) || temporary === false },
  ];

  const styleList = {
    height: useSizeHtml(height),
    width: useSizeHtml(width),
    top: useSizeHtml(paramStyleAppBar),
    bottom: useSizeHtml(paramStyleFooter),
  };

  useEffect(() => {
    if (app && window.innerWidth > 1264) {
      const appbar = getElHTMLHeight('mk-app-bar--fixed');
      const footer = getElHTMLHeight('mk-footer--fixed');
      const systembar = getElHTMLHeight('mk-system-bar');

      setParamStyleAppBar(appbar + systembar);
      setParamStyleFooter(footer);
      setForceOpen(true);
    } else {
      setForceOpen(false);
    }
    window.addEventListener('resize', () => {
      if (app && window.innerWidth > 1264) {
        const appbar = getElHTMLHeight('mk-app-bar--fixed');
        const footer = getElHTMLHeight('mk-footer--fixed');
        const systembar = getElHTMLHeight('mk-system-bar');

        setParamStyleAppBar(appbar + systembar);
        setParamStyleFooter(footer);
        setForceOpen(true);
      } else {
        setForceOpen(false);
      }
    });
  }, []);

  function getElHTMLHeight(el: string) {
    const elList = document.getElementsByClassName(el);
    if (elList && elList[0]?.clientHeight) return elList[0]?.clientHeight;
    else return 0;
  }

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

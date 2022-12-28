/**
 * Footer
 *
 * @type Structural
 * @module Footer
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Footer.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { FooterType } from './types/Footer';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../utils';

const Footer: FunctionComponent<FooterType> = ({
  id,
  className,
  style,
  children,
  absolute,
  elevation,
  fixed,
  inset,
  outlined,
  padless,
  rounded,
  shaped,
  tile,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  app,
}) => {
  const [paramStyleNavigationDrawer, setParamStyleNavigationDrawer] = useState(0);

  const classList = [
    { el: 'elevation-1', val: typeof elevation === 'boolean' && elevation },
    { el: 'elevation', val: typeof elevation === 'string' ? elevation : false },
    { el: 'rounded-lg', val: typeof rounded === 'boolean' && rounded },
    { el: 'rounded', val: typeof rounded === 'string' ? rounded : false },
    { el: 'footer--absolute', val: absolute },
    { el: 'mk-footer--fixed', val: fixed },
    { el: 'mk-footer--fixed', val: app },
    { el: 'is--inset', val: inset },
    { el: 'footer--outlined', val: outlined },
    { el: 'footer--shaped', val: shaped },
    { el: 'footer--tile', val: tile },
    { el: 'footer--padless', val: padless },
  ];

  const styleList = {
    width: useSizeHtml(width),
    height: useSizeHtml(height),
    minWidth: useSizeHtml(minWidth),
    maxWidth: useSizeHtml(maxWidth),
    minHeight: useSizeHtml(minHeight),
    maxHeight: useSizeHtml(maxHeight),
    padding: `0px 0px 0px ${paramStyleNavigationDrawer}px`,
  };

  useEffect(() => {
    // control size appbar for generate spacing
    setParamStyleNavigationDrawer(getElHTMLWidth('mk-navigation-drawer--fixed'));

    window.addEventListener('resize', () => {
      setParamStyleNavigationDrawer(getElHTMLWidth('mk-navigation-drawer--open'));
    });
  }, []);

  function getElHTMLWidth(el: string) {
    const appbarList = document.getElementsByClassName(el);
    if (appbarList && appbarList[0]?.clientHeight) return appbarList[0]?.clientWidth;
    else return 0;
  }

  return (
    <Fragment>
      <footer
        id={useIdHtml(id)}
        className={useClassHtml('mk-footer', className, classList)}
        style={useStyleHtml(styleList, style)}
      >
        {children}
      </footer>
    </Fragment>
  );
};

export default Footer;

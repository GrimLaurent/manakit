/**
 * Main
 *
 * @type Structural
 * @module Main
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Main.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { MainType } from './types/Main';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../utils';

const Main: FunctionComponent<MainType> = ({ id, className, style, children }) => {
  const [paramStyleAppBar, setParamStyleAppBar] = useState(0);
  const [paramStyleFooter, setParamStyleFooter] = useState(0);
  const [paramStyleNavigationDrawer, setParamStyleNavigationDrawer] = useState(0);

  const styleList = {
    padding: `${paramStyleAppBar}px 0px ${paramStyleFooter}px ${paramStyleNavigationDrawer}px`,
  };

  useEffect(() => {
    // control size appbar for generate spacing
    setParamStyleAppBar(getElHTMLHeight('mk-app-bar--fixed'));
    setParamStyleFooter(getElHTMLHeight('mk-footer--fixed'));
    setParamStyleNavigationDrawer(getElHTMLWidth('mk-navigation-drawer--fixed'));

    window.addEventListener('resize', () => {
      setParamStyleAppBar(getElHTMLHeight('mk-app-bar--fixed'));
      setParamStyleFooter(getElHTMLHeight('mk-footer--fixed'));
      setParamStyleNavigationDrawer(getElHTMLWidth('mk-navigation-drawer--open'));
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
      <main
        id={useIdHtml(id)}
        className={useClassHtml('mk-main', className)}
        style={useStyleHtml(styleList, style)}
        data-booted="true"
      >
        <div className="mk-main--wrap">{children}</div>
      </main>
    </Fragment>
  );
};

export default Main;

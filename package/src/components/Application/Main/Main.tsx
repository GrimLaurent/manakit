/**
 * Main
 * @type Structural
 * @module Main
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment, useEffect, useState, createContext } from 'react';
import { ElementChildrenType, ElementClassHTMLType, ElementIdHTMLType, ElementStyleHTMLType } from '../../../types';

// styles
import './Main.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';
import { getSizeAppBar, getSizeFooter, getSizeNavigation, getSizeSystemBar } from '../../../services/main';

const Main: FunctionComponent<MainClassType> = ({ id, className, style, children }) => {
  // const [paddingTop, setPaddingTop] = useState(0);
  // const [paddingBottom, setPaddingBottom] = useState(0);
  // const [paddingLeft, setPaddingLeft] = useState(0);
  // const [paddingRight, setPaddingRight] = useState(0);
  const [padding, setPadding]: any = useState(null);

  const styleList = {
    padding: padding,
  };

  useEffect(() => {
    let top = 0;
    let right = 0;
    let left = 0;
    let bottom = 0;
    const systemBar = getSizeSystemBar();
    const appBar = getSizeAppBar();
    const navigation = getSizeNavigation();
    const footer = getSizeFooter();

    if (navigation) {
      navigation.map((el) => {
        if (el.position === 'left') {
          left = left + el.size;
        } else if (el.position === 'right') {
          right = right + el.size;
        }
      });
    }

    if (systemBar) top = top + systemBar;
    if (appBar) top = top + appBar;
    if (footer) bottom = bottom + footer;

    // setPaddingTop(top);
    // setPaddingBottom(bottom);
    // setPaddingLeft(left);
    // setPaddingRight(right);
    const paddingTop = top;
    const paddingRight = right;
    const paddingBottom = bottom;
    const paddingLeft = left;

    setPadding(`${useSize(paddingTop)} ${useSize(paddingRight)} ${useSize(paddingBottom)} ${useSize(paddingLeft)}`);
  });

  return (
    <Fragment>
      <main
        id={id}
        className={useClassName('mkt-main', className)}
        style={useStyle(styleList, style)}
        data-booted="true"
      >
        <div className="mkt-main--wrap">
          <Fragment>{children}</Fragment>
        </div>
      </main>
    </Fragment>
  );
};

class MainClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
}

export default Main;

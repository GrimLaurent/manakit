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
import React, { FunctionComponent, Fragment, useEffect, useState } from 'react';
import { ElementChildrenType, ElementClassHTMLType, ElementIdHTMLType, ElementStyleHTMLType } from '../../../types';

// styles
import './Main.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';
import { getSizeNavigation } from '../../../services/main';

const Main: FunctionComponent<MainClassType> = ({ id, className, style, children }) => {
  const [paddingLeft, setPaddingLeft] = useState(0);
  const [paddingRight, setPaddingRight] = useState(0);

  const styleList = {
    padding: `0 ${useSize(paddingRight)} 0 ${useSize(paddingLeft)}`,
  };

  useEffect(() => {
    let right = 0;
    let left = 0;
    const navigation = getSizeNavigation();

    if (navigation) {
      navigation.map((el) => {
        if (el.position === 'left') {
          left = left + el.size;
        } else if (el.position === 'right') {
          right = right + el.size;
        }
      });
    }
    setPaddingLeft(left);
    setPaddingRight(right);
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

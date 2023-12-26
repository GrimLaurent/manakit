/**
 * Overlay
 *
 * @type Structural
 * @module Overlay
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 ManaStone and the ManaKit project authors
 */
import './Overlay.scss';
import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { useId, useClassName, useStyle } from '../../utils/dom';
import { ElementChildrenType, ElementClassHTMLType, ElementIdHTMLType, ElementStyleHTMLType } from '../../types';

const Overlay: FunctionComponent<OverlayClassType> = ({
  id,
  className,
  style,
  children,
  absolute,
  opacity,
  zIndex,
  value,
  handleClose,
  scrollStrategy,
}) => {
  const classList = [
    { el: 'mkt-opacity--absolute', val: absolute },
    { el: 'mkt-opacity--scroll-blocked', val: scrollStrategy === 'block' },
    { el: 'mkt-opacity--scroll-close', val: scrollStrategy === 'close' },
    { el: 'is--open', val: value },
  ];

  const styleList = {
    zIndex: zIndex,
  };

  const styleScreenList = {
    opacity: opacity,
  };

  useEffect(() => {
    if (value === true) {
      if (scrollStrategy === 'block') {
        disableScroll();
      } else if (scrollStrategy === 'close') {
      } else {
        enableScroll();
      }
    } else {
      enableScroll();
    }
  }, [scrollStrategy, value]);

  function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window?.pageYOffset || document?.documentElement?.scrollTop;
    const scrollLeft = window?.pageXOffset || document?.documentElement?.scrollLeft;

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
      window?.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  return (
    <Fragment>
      {value ? (
        <div
          id={useId(id)}
          className={useClassName('mkt-overlay', className, classList)}
          style={useStyle(styleList, style)}
        >
          <div className="mkt-overlay--screen" style={useStyle(styleScreenList)} onClick={handleClose}></div>
          <div className="mkt-overlay--wrap">{children}</div>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

class OverlayClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  absolute?: boolean;
  opacity?: number | string;
  zIndex?: number | string;
  value?: boolean;
  handleClose?: any;
  scrollStrategy?: 'block' | 'close';
}

export default Overlay;

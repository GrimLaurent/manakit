/**
 * Btn
 *
 * @type Structural
 * @module Btn
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Btn.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { BtnType } from './types/Btn';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../utils';

const Btn: FunctionComponent<BtnType> = ({
  id,
  className,
  style,
  children,
  xSmall,
  small,
  large,
  xLarge,
  disabled,
  block,
  icon,
  outlined,
  rounded,
  fab,
  text,
  tile,
  elevation,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  absolute,
  fixed,
  right,
  left,
  top,
  bottom,
  onClick,
  href,
  target,
}) => {
  const classList = [
    { el: 'elevation-1', val: typeof elevation === 'boolean' && elevation },
    { el: 'elevation', val: typeof elevation === 'string' ? elevation : false },
    { el: 'rounded-md', val: typeof rounded === 'boolean' && rounded },
    { el: 'rounded', val: typeof rounded === 'string' ? rounded : false },
    { el: 'mk-btn--x-small', val: xSmall },
    { el: 'mk-btn--small', val: small },
    { el: 'mk-btn--large', val: large },
    { el: 'mk-btn--x-large', val: xLarge },
    { el: 'mk-btn--outlined', val: outlined },
    { el: 'mk-btn--disabled', val: disabled },
    { el: 'mk-btn--block', val: block },
    { el: 'mk-btn--icon', val: icon },
    { el: 'mk-btn--round', val: icon },
    { el: 'mk-btn--fab', val: fab },
    { el: 'mk-btn--tile', val: tile },
    { el: 'mk-btn--text', val: text },
    { el: 'mk-btn--absolute', val: absolute },
    { el: 'mk-btn--fixed', val: fixed },
    { el: 'mk-btn--right', val: right },
    { el: 'mk-btn--left', val: left },
    { el: 'mk-btn--top', val: top },
    { el: 'mk-btn--bottom', val: bottom },
  ];

  const styleList = {
    width: useSizeHtml(width),
    height: useSizeHtml(height),
    minWidth: useSizeHtml(minWidth),
    maxWidth: useSizeHtml(maxWidth),
    minHeight: useSizeHtml(minHeight),
    maxHeight: useSizeHtml(maxHeight),
  };

  return (
    <Fragment>
      {href ? (
        <a
          id={useIdHtml(id)}
          className={useClassHtml('mk-btn', className, classList)}
          style={useStyleHtml(styleList, style)}
          onClick={() => onClick}
          href={href}
          target={target}
        >
          <div className="mk-btn--content">
            <span>{children}</span>
          </div>
        </a>
      ) : (
        <button
          id={useIdHtml(id)}
          className={useClassHtml('mk-btn', className, classList)}
          style={useStyleHtml(styleList, style)}
          type="button"
          onClick={onClick}
        >
          <div className="mk-btn--content">
            <span>{children}</span>
          </div>
        </button>
      )}
    </Fragment>
  );
};

export default Btn;

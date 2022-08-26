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
import './Chip.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ChipType } from './types/Chip';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../utils';

const Chip: FunctionComponent<ChipType> = ({
  id,
  className,
  style,
  children,
  xSmall,
  small,
  large,
  xLarge,
  disabled,
  outlined,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  label,
  link,
  onClick,
  href,
  target,
}) => {
  const classList = [
    { el: 'mk-btn--x-small', val: xSmall },
    { el: 'mk-btn--small', val: small },
    { el: 'mk-btn--large', val: large },
    { el: 'mk-btn--x-large', val: xLarge },
    { el: 'mk-btn--outlined', val: outlined },
    { el: 'mk-btn--disabled', val: disabled },
    { el: 'mk-btn--label', val: label },
    { el: 'mk-btn--clickable', val: link },
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
          className={useClassHtml('mk-card', className, classList)}
          style={useStyleHtml(styleList, style)}
          onClick={() => onClick}
          href={href}
          target={target}
        >
          <span className="mk-card--content">{children}</span>
        </a>
      ) : (
        <span
          id={useIdHtml(id)}
          className={useClassHtml('mk-card', className, classList)}
          style={useStyleHtml(styleList, style)}
          onClick={() => onClick}
        >
          <span className="mk-btn--content">{children}</span>
        </span>
      )}
    </Fragment>
  );
};

export default Chip;

/**
 * Card
 *
 * @type Structural
 * @module Card
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Card.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { CardType } from './types/Card';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../../utils';

const Card: FunctionComponent<CardType> = ({
  id,
  className,
  style,
  children,
  disabled,
  outlined,
  rounded,
  shaped,
  tile,
  elevation,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  onClick,
  href,
  target,
}) => {
  const classList = [
    { el: 'elevation-1', val: typeof elevation === 'boolean' && elevation },
    { el: 'elevation', val: typeof elevation === 'string' ? elevation : false },
    { el: 'rounded-md', val: typeof rounded === 'boolean' && rounded },
    { el: 'rounded', val: typeof rounded === 'string' ? rounded : false },
    { el: 'mk-card--outlined', val: outlined },
    { el: 'mk-card--disabled', val: disabled },
    { el: 'mk-card--tile', val: tile },
    { el: 'mk-card--shaped', val: shaped },
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
          {children}
        </a>
      ) : (
        <div
          id={useIdHtml(id)}
          className={useClassHtml('mk-card', className, classList)}
          style={useStyleHtml(styleList, style)}
          onClick={() => onClick}
        >
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default Card;

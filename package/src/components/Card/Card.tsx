/**
 * Card
 * @type Structural
 * @module Card => Sheet
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import {
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
  ElevationClass,
  RoundedClass,
  SizeHTML,
} from '../../types';

// styles
import './Card.scss';

// utilities
import { useClassName, useStyle } from '../../utils/dom';
import Sheet from '../Sheet'; //dependencies

const Card: FunctionComponent<CardClassType> = ({
  id,
  className,
  style,
  children,
  dark,
  light,
  color,
  width,
  height,
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
  elevation = 2,
  outlined,
  rounded = 'sm',
  relative,
  absolute,
  statik,
  fixed,
  sticky,
}) => {
  const classList = [{}];

  return (
    <Fragment>
      <Sheet
        id={id}
        className={useClassName('mkt-card', className, classList)}
        style={useStyle({}, style)}
        color={color}
        outlined={outlined}
        rounded={rounded}
        elevation={elevation}
        sticky={sticky}
        statik={statik}
        fixed={fixed}
        relative={relative}
        absolute={absolute}
        width={width}
        height={height}
        minHeight={minHeight}
        minWidth={minWidth}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        dark={dark}
        light={light}
      >
        <Fragment>{children}</Fragment>
      </Sheet>
    </Fragment>
  );
};

class CardClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  dark?: boolean;
  light?: boolean;
  color?: string;
  width?: SizeHTML;
  height?: SizeHTML;
  minWidth?: SizeHTML;
  minHeight?: SizeHTML;
  maxWidth?: SizeHTML;
  maxHeight?: SizeHTML;
  outlined?: boolean;
  rounded?: RoundedClass;
  elevation?: ElevationClass;
  relative?: boolean;
  absolute?: boolean;
  statik?: boolean;
  fixed?: boolean;
  sticky?: boolean;
}

export default Card;

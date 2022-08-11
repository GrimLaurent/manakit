/**
 * Rectangle
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Component
 * @module Rectangle
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { RectangleType } from './types/Rectangle.types';
import { RectangleStyled } from './styles/Rectangle.styled';
import { useClassHtml, useIdHtml, useStyleHtml, useThemeColor } from '../../../utils';

const Rectangle: FunctionComponent<RectangleType> = ({
  id,
  className,
  style,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  color,
  dark,
  light,
  children,
}) => {
  const [mode, setMode]: any = useState();

  useEffect(() => {
    if (light) setMode(false);
  }, [light]);

  useEffect(() => {
    if (dark) setMode(true);
  }, [dark]);

  return (
    <RectangleStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-rectangle', className)}
      style={useStyleHtml({}, style)}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      color={useThemeColor(color, Boolean(mode))}
      mode={typeof mode === 'boolean' ? (mode ? 'dark' : 'light') : undefined}
    >
      {children}
    </RectangleStyled>
  );
};

export default Rectangle;

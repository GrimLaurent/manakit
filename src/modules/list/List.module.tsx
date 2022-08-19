/**
 * List
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Component
 * @module List
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent } from 'react';
import { ListType } from './types/List.types';
import { ListStyled } from './styles/List.styled';
import { useClassHtml, useIdHtml } from './../../utils';

import Paper from '../paper/Paper.module';

const ListStyledHOC = ListStyled(Paper);

const List: FunctionComponent<ListType> = ({
  id,
  className,
  style,
  children,
  color,
  background,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  rounded,
  outlined,
  elevation,
  light,
  dark,
  nav,
  subHeader,
  dense,
}) => {
  return (
    <ListStyledHOC
      id={useIdHtml(id)}
      className={useClassHtml('mk-list', className)}
      style={style}
      color={color}
      background={background}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      roundedChild={rounded}
      outlined={outlined}
      elevation={elevation}
      light={light}
      dark={dark}
      nav={nav}
      subHeader={subHeader}
      dense={dense}
    >
      {children}
    </ListStyledHOC>
  );
};

export default List;

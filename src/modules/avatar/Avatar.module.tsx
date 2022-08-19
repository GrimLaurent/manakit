/**
 * Avatar
 *
 * @description View is a basic module that allows you to display content in line with the manakit theme and to ensure the effects of transitions and placement for the content.
 * @type Module
 * @module Avatar
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment, useEffect, useState } from 'react';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../utils';
import { AvatarType } from './types/Avatar.types';
import { AvatarStyled } from './styles/Avatar.styled';

const Avatar: FunctionComponent<AvatarType> = ({
  id,
  className,
  style,
  children,
  color,
  rounded,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  size,
}) => {
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (typeof children === 'string') {
      setLabel(children.slice(0, 1));
    } else {
      setLabel('');
    }
  }, [children]);

  return (
    <Fragment>
      <AvatarStyled
        id={useIdHtml(id)}
        className={useClassHtml(`mk-avatar`, className)}
        style={useStyleHtml({}, style)}
        color={color}
        rounded={rounded}
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
        height={height}
        minHeight={minHeight}
        maxHeight={maxHeight}
        size={size ? size : '48px'}
      >
        {label !== '' ? label : children}
      </AvatarStyled>
    </Fragment>
  );
};

export default Avatar;

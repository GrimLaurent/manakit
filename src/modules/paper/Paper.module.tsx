/**
 * Paper
 *
 * @description View is a basic module that allows you to display content in line with the manakit theme and to ensure the effects of transitions and placement for the content.
 * @type Module
 * @module Paper
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import { useClassHtml, useIdHtml, useStyleHtml, useRoundedTheme, useThemeColor } from '../../utils';
import { PaperType } from './types/Paper.types';
import { PaperStyled } from './styles/Paper.styled';

const Paper: FunctionComponent<PaperType> = ({
  id,
  className,
  style,
  children,
  rounded,
  elevation,
  color,
  background,
  outlined,
  dark,
  light,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
}) => {
  const [mode, setMode]: any = useState(undefined);
  const classList = [{ el: 'elevation', val: elevation }];

  useEffect(() => {
    if (light) setMode('light');
  }, [light]);

  useEffect(() => {
    if (dark) setMode('dark');
  }, [dark]);

  return (
    <Fragment>
      <PaperStyled
        id={useIdHtml(id)}
        className={useClassHtml(`mk-paper`, className, classList)}
        style={useStyleHtml({}, style)}
        rounded={useRoundedTheme(rounded, 'none')}
        color={useThemeColor(color, mode, 'onSurface')}
        background={useThemeColor(background, mode, 'surface')}
        outlined={outlined}
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
        height={height}
        minHeight={minHeight}
        maxHeight={maxHeight}
      >
        {children}
      </PaperStyled>
    </Fragment>
  );
};

export default Paper;

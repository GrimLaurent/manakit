/**
 * SubHeader
 *
 * @description View is a basic module that allows you to display content in line with the manakit theme and to ensure the effects of transitions and placement for the content.
 * @type Module
 * @module SubHeader
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { useClassHtml, useIdHtml, useStyleHtml, useThemeColor } from '../../utils';
import { SubHeaderType } from './types/SubHeader.types';
import { SubHeaderStyled } from './styles/SubHeader.styled';

const SubHeader: FunctionComponent<SubHeaderType> = ({ id, className, style, children, color, inset }) => {
  return (
    <Fragment>
      <SubHeaderStyled
        id={useIdHtml(id)}
        className={useClassHtml(`mk-subheader`, className)}
        style={useStyleHtml({}, style)}
        color={useThemeColor(color, undefined, 'onSurface')}
        inset={inset}
      >
        {children}
      </SubHeaderStyled>
    </Fragment>
  );
};

export default SubHeader;

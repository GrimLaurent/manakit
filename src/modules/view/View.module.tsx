/**
 * View
 *
 * @description View is a basic module that allows you to display content in line with the manakit theme and to ensure the effects of transitions and placement for the content.
 * @type Module
 * @module View
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../utils';
import { ViewType } from './types/View.types';
import { ContainerStyled } from './styles/View.styled';

const View: FunctionComponent<ViewType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <ContainerStyled
        id={useIdHtml(id)}
        className={useClassHtml(`mk-view`, className)}
        style={useStyleHtml({}, style)}
      >
        {children}
      </ContainerStyled>
    </Fragment>
  );
};

export default View;

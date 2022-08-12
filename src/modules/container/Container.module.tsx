/**
 * Container
 *
 * @description View is a basic module that allows you to display content in line with the manakit theme and to ensure the effects of transitions and placement for the content.
 * @type Module
 * @module Container
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../utils';
import { ContainerType } from './types/Container.types';
import { ContainerStyled } from './styles/Container.styled';

const Container: FunctionComponent<ContainerType> = ({ id, className, style, children, fluid }) => {
  return (
    <Fragment>
      <ContainerStyled
        id={useIdHtml(id)}
        className={useClassHtml(`mk-container`, className)}
        style={useStyleHtml({}, style)}
        fluid={fluid}
      >
        {children}
      </ContainerStyled>
    </Fragment>
  );
};

export default Container;

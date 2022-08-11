/**
 * Spacer
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Component
 * @module Spacer
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent } from 'react';
import { SpacerType } from '../types/Spacer.types';
import { SpacerStyled } from '../styles/Spacer.styled';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const Spacer: FunctionComponent<SpacerType> = ({ id, className, style }) => {
  return (
    <SpacerStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-grid--spacer', className)}
      style={useStyleHtml({}, style)}
    ></SpacerStyled>
  );
};

export default Spacer;

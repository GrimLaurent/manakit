/**
 * Spacer
 * @type Structural
 * @module Spacer
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';

// styles
import './Spacer.scss';

// utilities
import { useClassName, useStyle } from '../../../utils/dom';
import { ElementChildrenType, ElementClassHTMLType, ElementIdHTMLType, ElementStyleHTMLType } from '../../../types';

const Spacer: FunctionComponent<SpacerClassType> = ({ id, className, style }) => {
  return (
    <Fragment>
      <div id={id} className={useClassName(`mkt-spacer`, className)} style={useStyle({}, style)} />
    </Fragment>
  );
};

class SpacerClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  color?: string;
  dark?: boolean;
  light?: boolean;
  fluid?: boolean;
  fillHeight?: boolean;
}

export default Spacer;

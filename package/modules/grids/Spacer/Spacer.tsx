/**
 * Spacer
 * @type Structural
 * @module Spacer
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { SpacerClassType } from './Spacer.type';

// styles
import './Spacer.scss';

// utilities
import { useClassName, useStyle } from '../../../utils/dom';

const Spacer: FunctionComponent<SpacerClassType> = ({ id, className, style }) => {
  return (
    <Fragment>
      <div id={id} className={useClassName(`k-spacer`, className)} style={useStyle({}, style)}></div>
    </Fragment>
  );
};

export default Spacer;

/**
 * KSpacer
 * @type Structural
 * @module KSpacer
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { SpacerClassType } from './KSpacer.type';

// styles
import './KSpacer.scss';

// utilities
import { useClassName, useStyle } from '../../../utils/dom';

const KSpacer: FunctionComponent<SpacerClassType> = ({ id, className, style }) => {
  return (
    <Fragment>
      <div id={id} className={useClassName(`k-spacer`, className)} style={useStyle({}, style)}></div>
    </Fragment>
  );
};

export default KSpacer;

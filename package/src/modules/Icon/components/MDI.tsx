/**
 * MDI
 * @type Component
 * @module Icon
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */

/**
 * based to SVG mode to https://materialdesignicons.com/
 */
import React, { Fragment, FunctionComponent } from 'react';
import { useStyle } from '../../../utils/dom';
import { MDIClassType } from './MDI.type';

const MDI: FunctionComponent<MDIClassType> = ({ children, styleList, dense, disabled, color }) => {
  return (
    <Fragment>
      <svg
        viewBox={dense ? '0 0 20 20' : '0 0 24 24'}
        style={useStyle(styleList, { transformOrigin: 'center', opacity: disabled ? 0.38 : 1 })}
        role="img"
        aria-hidden="true"
        className="k-icon--svg"
      >
        <g style={{ transformOrigin: 'center' }}>
          <path d={children as any} fill={color}></path>
        </g>
      </svg>
    </Fragment>
  );
};

export default MDI;

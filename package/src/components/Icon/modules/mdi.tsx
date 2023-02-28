/**
 * MDI
 * @type modulte to Icon
 * @module Icon
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */

/**
 * based to SVG mode to https://materialdesignicons.com/
 */
import React, { Fragment, FunctionComponent } from 'react';
import { ElementChildrenType } from '../../../types';

const MDI: FunctionComponent<MDIClassType> = ({ children, color }) => {
  return (
    <Fragment>
      <svg
        viewBox={'0 0 24 24'}
        style={{ transformOrigin: 'center' }}
        role="img"
        aria-hidden="true"
        className="mkt-icon--svg"
      >
        <g style={{ transformOrigin: 'center' }}>
          <path d={children as any} fill={color}></path>
        </g>
      </svg>
    </Fragment>
  );
};

export default MDI;

class MDIClassType {
  children?: ElementChildrenType;
  color?: string;
  large?: boolean;
  xLarge?: boolean;
}

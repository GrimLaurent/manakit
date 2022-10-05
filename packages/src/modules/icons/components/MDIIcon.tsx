/**
 * MDI Icon
 *
 * @type Component
 * @module Icon
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */

/**
 * based to SVG mode to https://materialdesignicons.com/
 */
import React, { Fragment, FunctionComponent } from 'react';
import { useStyleHtml } from '../../../utils';

const MDIIcon: FunctionComponent<any> = ({ children, styleList, dense, disabled, color }) => {
  return (
    <Fragment>
      <svg
        viewBox={dense ? '0 0 20 20' : '0 0 24 24'}
        style={useStyleHtml(styleList, { transformOrigin: 'center', opacity: disabled ? 0.38 : 1 })}
        role="img"
        aria-hidden="true"
      >
        <g style={{ transformOrigin: 'center' }}>
          <path d={children as any} fill={color}></path>
        </g>
      </svg>
    </Fragment>
  );
};

export default MDIIcon;

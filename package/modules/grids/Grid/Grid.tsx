/**
 * Grid
 * @type Structural
 * @module Grid
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { GridClassType } from './Grid.type';

// styles
import './Grid.scss';

// utilities
import { useClassName, useStyle } from '../../../utils/dom';

const Grid: FunctionComponent<GridClassType> = ({ id, className, style, children, fluid, fillHeight }) => {
  const classList = [
    { el: 'is--fluid', val: fluid },
    { el: 'fill-height ', val: fillHeight },
  ];

  return (
    <Fragment>
      <section id={id} className={useClassName(`k-grid`, className, classList)} style={useStyle({}, style)}>
        {children}
      </section>
    </Fragment>
  );
};

export default Grid;

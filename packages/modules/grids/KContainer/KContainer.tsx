/**
 * KContainer
 * @type Structural
 * @module KContainer
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { ContainerClassType } from './KContainer.type';

// styles
import './KContainer.scss';

// utilities
import { useClassName, useStyle } from '../../../utils/dom';

// dependencies
import KContent from '../../KContent';

const KContainer: FunctionComponent<ContainerClassType> = ({ id, className, style, children, fluid, fillHeight }) => {
  const classList = [
    { el: 'is--fluid', val: fluid },
    { el: 'fill-height ', val: fillHeight },
  ];

  return (
    <Fragment>
      <KContent id={id} className={useClassName(`k-container`, className, classList)} style={useStyle({}, style)}>
        {children}
      </KContent>
    </Fragment>
  );
};

export default KContainer;

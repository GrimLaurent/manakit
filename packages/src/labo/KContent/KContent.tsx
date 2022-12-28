/**
 * KContent
 * @type Structural
 * @module KContent
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { ContentClassType } from './KContent.type';

// styles
import './KContent.scss';

// utilities
import { useClassName, useStyle } from '../../utils/dom';

const KContent: FunctionComponent<ContentClassType> = ({ id, className, style, children }) => {
  return (
    <section id={id} className={useClassName(`k-content`, className)} style={useStyle({}, style)}>
      {children}
    </section>
  );
};

export default KContent;

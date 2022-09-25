/**
 * Divider
 *
 * @type Structural
 * @module Divider
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Divider.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { DividerType } from './types/Divider';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';

const Divider: FunctionComponent<DividerType> = ({ id, className, style, inset, vertical }) => {
  const classList = [
    { el: 'is--inset', val: inset },
    { el: 'divider-vertical', val: vertical },
  ];

  return (
    <Fragment>
      <hr
        id={useIdHtml(id)}
        className={useClassHtml('mk-divider', className, classList)}
        role="separator"
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
        style={useStyleHtml({}, style)}
      />
    </Fragment>
  );
};

export default Divider;

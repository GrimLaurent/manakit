/**
 * Spacer
 *
 * @type Structural
 * @module Spacer
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Spacer.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { SpacerType } from './types/Spacer';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const Spacer: FunctionComponent<SpacerType> = ({ id, className, style }) => {
  return (
    <Fragment>
      <div id={useIdHtml(id)} className={useClassHtml(`mk-spacer`, className)} style={useStyleHtml({}, style)}></div>
    </Fragment>
  );
};

export default Spacer;

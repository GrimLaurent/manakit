/**
 * Subheader
 *
 * @type Structural
 * @module Subheader
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Subheader.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { SubheaderType } from './types/Subheader';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';

const Subheader: FunctionComponent<SubheaderType> = ({ id, className, style, children, inset }) => {
  const classList = [{ el: 'is--inset', val: inset }];

  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml('mk-subheader', className, classList)}
        style={useStyleHtml({}, style)}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Subheader;

/**
 * ExpansionPanels
 *
 * @type Structural
 * @module ExpansionPanels
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ExpansionPanels.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { ExpansionPanelsType } from './types/ExpansionPanels';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

const ExpansionPanels: FunctionComponent<ExpansionPanelsType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml('mk-items-group mk-expansion-panels', className)}
        style={useStyleHtml({}, style)}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default ExpansionPanels;

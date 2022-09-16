/**
 * ExpansionPanel
 *
 * @type Structural
 * @module ExpansionPanel
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ExpansionPanel.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ExpansionPanelType } from './types/ExpansionPanel';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

const ExpansionPanel: FunctionComponent<ExpansionPanelType> = ({ id, className, style, children, isOpen }) => {
  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml('mk-expansion-panel', className)}
        style={useStyleHtml({}, style)}
        aria-expanded={isOpen !== undefined ? isOpen : false}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default ExpansionPanel;

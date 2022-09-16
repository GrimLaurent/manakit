/**
 * ExpansionPanelHeader
 *
 * @type Structural
 * @module ExpansionPanelHeader
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ExpansionPanelHeader.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ExpansionPanelHeaderType } from './types/ExpansionPanelHeader';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

const ExpansionPanelHeader: FunctionComponent<ExpansionPanelHeaderType> = ({
  id,
  className,
  style,
  children,
  isOpen,
}) => {
  const classList = [
    { el: 'mk-expansion-panel-header--active', val: isOpen },
    { el: 'mk-expansion-panel-header--close', val: isOpen === false || isOpen === undefined },
  ];

  return (
    <Fragment>
      <button
        id={useIdHtml(id)}
        className={useClassHtml('mk-expansion-panel-header', className, classList)}
        style={useStyleHtml({}, style)}
        aria-expanded={isOpen !== undefined ? isOpen : false}
      >
        {children}

        <div className="mk-expansion-panel-header--icon">
          <span>&#12297;</span>
        </div>
      </button>
    </Fragment>
  );
};

export default ExpansionPanelHeader;

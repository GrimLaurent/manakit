/**
 * ExpansionPanelContent
 *
 * @type Structural
 * @module ExpansionPanelContent
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ExpansionPanelContent.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ExpansionPanelContentType } from './types/ExpansionPanelContent';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

const ExpansionPanelContent: FunctionComponent<ExpansionPanelContentType> = ({
  id,
  className,
  style,
  children,
  isOpen,
}) => {
  const classList = [
    { el: 'mk-expansion-panel-content--active', val: isOpen },
    { el: 'mk-expansion-panel-content--close', val: isOpen === false || isOpen === undefined },
  ];

  return (
    <Fragment>
      <button
        id={useIdHtml(id)}
        className={useClassHtml('mk-expansion-panel-content', className, classList)}
        style={useStyleHtml({}, style)}
      >
        <div className="mk-expansion-panel-content--wrap">{children}</div>
      </button>
    </Fragment>
  );
};

export default ExpansionPanelContent;

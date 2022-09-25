/**
 * ToolbarItems
 *
 * @type Structural
 * @module ToolbarItems
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ToolbarItems.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ToolbarItemsType } from './types/ToolbarItems';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../../utils';

const ToolbarItems: FunctionComponent<ToolbarItemsType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div id={useIdHtml(id)} className={useClassHtml('mk-toolbar-items', className)} style={useStyleHtml({}, style)}>
        {children}
      </div>
    </Fragment>
  );
};

export default ToolbarItems;

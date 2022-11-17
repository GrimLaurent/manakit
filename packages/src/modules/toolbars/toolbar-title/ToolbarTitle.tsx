/**
 * ToolbarTitle
 *
 * @type Structural
 * @module ToolbarTitle
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ToolbarTitle.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ToolbarTitleType } from './types/ToolbarTitle';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

const ToolbarTitle: FunctionComponent<ToolbarTitleType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div id={useIdHtml(id)} className={useClassHtml('mk-toolbar-title', className)} style={useStyleHtml({}, style)}>
        {children}
      </div>
    </Fragment>
  );
};

export default ToolbarTitle;

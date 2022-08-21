/**
 * AppbarTitle
 *
 * @type Structural
 * @module ToolbarTitle
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { Fragment, FunctionComponent } from 'react';
import { AppbarTitleType } from './types/AppbarTitle';
import { useClassHtml } from '../../../utils';

// dependencies
import { ToolbarTitle } from '../../toolbars';

const AppbarTitle: FunctionComponent<AppbarTitleType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <ToolbarTitle id={id} className={useClassHtml('mk-app-bar-title', className)} style={style}>
        {children}
      </ToolbarTitle>
    </Fragment>
  );
};

export default AppbarTitle;

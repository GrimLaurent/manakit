/**
 * ToolbarTitle
 * @type Structural
 * @module ToolbarTitle
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { ElementChildrenType, ElementClassHTMLType, ElementIdHTMLType, ElementStyleHTMLType } from '../../../types';

// styles
import './Toolbar.scss';

// utilities
import { useClassName, useStyle } from '../../../utils/dom';

const ToolbarTitle: FunctionComponent<ToolbarTitleClassType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div id={id} className={useClassName('mkt-toolbar--title', className)} style={useStyle({}, style)}>
        <div className="mkt-toolbar--title--placeholder">
          <Fragment>{children}</Fragment>
        </div>
      </div>
    </Fragment>
  );
};

class ToolbarTitleClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
}

export default ToolbarTitle;

/**
 * ListItemTitle
 * @type Structural
 * @module ListItemTitle
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { ElementChildrenType, ElementClassHTMLType, ElementIdHTMLType, ElementStyleHTMLType } from '../../types';

// styles
import './List.scss';

// utilities
import { useClassName, useStyle } from '../../utils/dom';

const ListItemTitle: FunctionComponent<ListItemTitleClassType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div id={id} className={useClassName('mkt-list-item-title', className)} style={useStyle({}, style)}>
        <Fragment>{children}</Fragment>
      </div>
    </Fragment>
  );
};

class ListItemTitleClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
}

export default ListItemTitle;

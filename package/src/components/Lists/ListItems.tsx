/**
 * ListItem
 * @type Structural
 * @module ListItem
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

const ListItem: FunctionComponent<ListItemClassType> = ({
  id,
  className,
  style,
  children,
  role,
  tabIndex,
  appendIcon,
  prependIcon,
  onClick,
}) => {
  return (
    <Fragment>
      <div
        id={id}
        className={useClassName('mkt-list-item', className)}
        style={useStyle({}, style)}
        tabIndex={tabIndex ? tabIndex : -1}
        role={role ? role : 'option'}
        onClick={onClick}
      >
        <span className="mkt-list-item--overlay" />
        {appendIcon ? (
          <div className="mkt-list-item--icon append-icon">
            <Fragment>{appendIcon}</Fragment>
          </div>
        ) : null}
        <div className="mkt-list-item--content">
          <Fragment>{children}</Fragment>
        </div>
        {prependIcon ? (
          <div className="mkt-list-item--icon prepend-icon">
            <Fragment>{prependIcon}</Fragment>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

class ListItemClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  tabIndex?: number;
  role?: string;
  prependIcon?: ElementChildrenType;
  appendIcon?: ElementChildrenType;
  onClick?: any;
}

export default ListItem;

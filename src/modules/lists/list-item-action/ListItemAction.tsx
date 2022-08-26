/**
 * ListItemAction
 *
 * @type Structural
 * @module ListItemAction
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ListItemAction.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ListItemActionType } from './types/ListItemAction';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

const ListItemAction: FunctionComponent<ListItemActionType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml('mk-list-item--action', className)}
        style={useStyleHtml({}, style)}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default ListItemAction;

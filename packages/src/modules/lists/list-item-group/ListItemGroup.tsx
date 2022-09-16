/**
 * ListItemGroup
 *
 * @type Structural
 * @module ListItemGroup
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ListItemGroup.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ListItemGroupType } from './types/ListItemGroup';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

const ListItemGroup: FunctionComponent<ListItemGroupType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml('mk-list-item-group', className)}
        style={useStyleHtml({}, style)}
        role="listbox"
      >
        {children}
      </div>
    </Fragment>
  );
};

export default ListItemGroup;

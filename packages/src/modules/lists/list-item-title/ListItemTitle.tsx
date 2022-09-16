/**
 * ListItemTitle
 *
 * @type Structural
 * @module ListItemTitle
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ListItemTitle.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ListItemTitleType } from './types/ListItemTitle';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

const ListItemTitle: FunctionComponent<ListItemTitleType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml('mk-list-item--title', className)}
        style={useStyleHtml({}, style)}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default ListItemTitle;

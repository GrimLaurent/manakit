/**
 * ListItemSubtitle
 *
 * @type Structural
 * @module ListItemSubtitle
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ListItemSubtitle.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ListItemSubtitleType } from './types/ListItemSubtitle';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

const ListItemSubtitle: FunctionComponent<ListItemSubtitleType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml('mk-list-item--subtitle', className)}
        style={useStyleHtml({}, style)}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default ListItemSubtitle;

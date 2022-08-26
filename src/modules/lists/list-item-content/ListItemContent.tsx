/**
 * ListItemContent
 *
 * @type Structural
 * @module ListItemContent
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ListItemContent.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ListItemContentType } from './types/ListItemContent';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const ListItemContent: FunctionComponent<ListItemContentType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml('mk-list-item-content', className)}
        style={useStyleHtml({}, style)}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default ListItemContent;

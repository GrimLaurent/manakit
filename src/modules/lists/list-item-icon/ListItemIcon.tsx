/**
 * ListItemIcon
 *
 * @type Structural
 * @module ListItemIcon
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ListItemIcon.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ListItemIconType } from './types/ListItemIcon';
import { useClassHtml } from '../../../utils';

//dependencies
import Icon from '../../icons';

const ListItemIcon: FunctionComponent<ListItemIconType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <Icon id={id} className={useClassHtml('mk-list-item-icon', className)} style={style}>
        {children}
      </Icon>
    </Fragment>
  );
};

export default ListItemIcon;

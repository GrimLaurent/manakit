/**
 * ListItemAvatar
 *
 * @type Structural
 * @module ListItemAvatar
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ListItemAvatar.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ListItemAvatarType } from './types/ListItemAvatar';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

//dependencies
import Avatar from '../../avatar';

const ListItemAvatar: FunctionComponent<ListItemAvatarType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <Avatar
        id={useIdHtml(id)}
        className={useClassHtml('mk-list-item--avatar', className)}
        style={useStyleHtml({}, style)}
      >
        {children}
      </Avatar>
    </Fragment>
  );
};

export default ListItemAvatar;

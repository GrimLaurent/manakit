/**
 * ListItem
 *
 * @type Structural
 * @module ListItem
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './ListItem.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ListItemType } from './types/ListItem';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

const ListItem: FunctionComponent<ListItemType> = ({
  id,
  className,
  style,
  children,
  onClick,
  href,
  target,
  twoLine,
  threeLine,
}) => {
  const classList = [
    { el: 'mk-list-item--link', val: onClick || href },
    { el: 'mk-list-item--two-line', val: twoLine },
    { el: 'mk-list-item--three-line', val: threeLine },
  ];

  return (
    <Fragment>
      {href ? (
        <a
          id={useIdHtml(id)}
          className={useClassHtml('mk-list-item', className, classList)}
          style={useStyleHtml({}, style)}
          role="option"
          aria-selected="false"
          href={href}
          target={target}
          onClick={() => onClick}
        >
          {children}
        </a>
      ) : (
        <div
          id={useIdHtml(id)}
          className={useClassHtml('mk-list-item', className, classList)}
          style={useStyleHtml({}, style)}
          role="option"
          aria-selected="false"
          onClick={() => onClick}
        >
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default ListItem;
